import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { http } from '../../service/axios'
import Article from "../article/Article";
import { useUser } from "../../context/UserContext";
import { Post } from "../../types";
import { Skeleton } from "antd";

const Home: React.FC = (): JSX.Element => {
  const { bool } = useUser()
  const [post, setPost] = useState<Array<Post>>([])

  useEffect(() => {
    (async () => {
      const token = Cookies.get('token') as string
      if (token) {
        const data: any = await http.get('/posts');
        if (data.data) {
          setPost(data.data)
        }
      }
    })()
  }, [bool]);

  return (
    <>
      {post.length > 0 ?
        post.map((post: Post, index: number) => <Article key={index} post={post} />).reverse()
        : <Skeleton />
      }
    </>
  )
}

export default Home
