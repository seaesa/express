import { useEffect, useState } from "react";
import { http } from '../../service/axios'
import Article from "../article/Article";
import { useUser } from "../../context/UserContext";
import Cookies from "js-cookie";
export default function Home() {
  const { bool } = useUser()
  const [post, setPost] = useState<Array<any>>([])

  useEffect(() => {
    (async () => {
      const token = Cookies.get('token')
      if (token) {
        const postFil = []
        const data: any = await http.get('/posts');
        if (data.data) {
          postFil.push(...data.data.filter((data: any) => data.author !== null))
          setPost(postFil)
        }
      }
    })()
  }, [bool]);

  return (
    <>
      {post.length > 0 && post.map((post: any, index: number) => <Article key={index} post={post} />).reverse()}
    </>
  )
}