import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { http } from '../../service/axios'
import Article from "../article/Article";
import { useUser } from "../../context/UserContext";
import { Post } from "../../types";
import NoData from "../loading/Data";

const Home: React.FC = (): JSX.Element => {
  const { bool } = useUser()
  const [post, setPost] = useState<Array<Post>>([])
  useEffect(() => {
    (async () => {
      const token = Cookies.get('token') as string
      if (token) {
        const data: any = await http.get('/posts');
        setPost(data.data)
      }
    })()
  }, [bool]);

  return (
    <>
      {post.length > 0 ?
        post.map((post: Post, index: number) => <Article key={index} post={post} />).reverse()
        : <NoData />
      }
    </>
  )
}

export default Home
