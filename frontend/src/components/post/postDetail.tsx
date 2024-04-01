import { AliwangwangOutlined, CloseOutlined, EllipsisOutlined, HeartOutlined, SendOutlined, SmileOutlined } from "@ant-design/icons"
import { Avatar, Image } from "antd"
import Icon from "../icons/Icon"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { http } from "../../service/axios"

const PostDetail = () => {
  const { post } = useParams();
  const [posts, setPosts] = useState<any>(null)
  useEffect(() => {
    (async () => {
      const postDetail: any = await http.get(`posts/${post}`);
      setPosts(postDetail.data)
    })()
  }, [post])
  return (
    <>
      {posts &&
        <div className="flex w-4/5 h-5/6 bg-white mx-10 my-10">
          <div className="max-w-[50%] min-w-[40%] h-auto">
            <Image
              height='100%'
              width='100%'
              className="object-cover object-center overflow-hidden"
              preview={false}
              src={posts.image} />
          </div>
          <div className="flex flex-col flex-1 px-4 py-4">
            <div className="flex justify-between">
              <div className="flex flex-1 items-center">
                <Avatar src={posts.author.defaultAvatar} />
                <div className="flex flex-col ml-3 leading-5">
                  <span className="font-extrabold">{posts.author.username}</span>
                  <span className="font-light">{new Date(posts.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="cursor-pointer">
                <EllipsisOutlined />
              </div>
            </div>
            <hr className="mt-2" />

            <div className="mx-auto my-auto text-center">
              <h1 className="font-bold text-2xl">Chưa có bình luận nào.</h1>
              <p className="font-semibold">Bắt đầu trò chuyện.</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="mx-2">
                    <Icon icon={HeartOutlined} />
                  </div>
                  <div className="mx-2">
                    <Icon icon={AliwangwangOutlined} />
                  </div>
                  <div className="mx-2">
                    <Icon icon={SendOutlined} />
                  </div>
                </div>
                <div>
                  <Icon icon={SmileOutlined} />
                </div>
              </div>
              <div className="mt-2 mx-2">
                <p className="font-bold">hãy là người đầu tiên thích baì viết này</p>
                <span className="text-sm">{new Date().toLocaleDateString()}</span>
              </div>
              <hr className="mt-2" />
              <div className='border-t p-3 text-sm flex items-center justify-between space-x-3'>
                <SmileOutlined className='text-2xl' />
                <input
                  type='text'
                  className='outline-none block flex-1'
                  placeholder='Add a comment'
                />
                <div className='text-blue-400 font-bold mr-1 cursor-pointer'>Post</div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default PostDetail