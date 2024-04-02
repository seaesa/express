import { memo } from "react"
import { Avatar, Image } from "antd"
import {
  AliwangwangOutlined,
  CloseOutlined,
  EllipsisOutlined,
  HeartOutlined,
  SendOutlined,
  SmileOutlined
} from "@ant-design/icons"

import Icon from "../icons/Icon"
import { Post } from "../../types"

interface PostDetailTypes {
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  post: Post
}
const PostDetail: React.FC<PostDetailTypes> = ({ setShow, post }): JSX.Element => {

  return (
    <>
      <div className="bg-gray-500 bg-opacity-20 z-50 fixed top-0 left-0 right-0 bottom-0">
        <div
          onClick={() => setShow((show: boolean) => !show)}
          className="absolute right-3 top-2">
          <CloseOutlined className="mx-4 my-4 cursor-pointer" style={{ fontSize: '1.6rem' }} />
        </div>
        <div className="animate-fade flex w-4/5 h-5/6 absolute top-2/4 left-2/4 bg-white">
          <div className="max-w-[50%] min-w-[40%] h-auto">
            <Image
              height='100%'
              width='100%'
              className="object-cover object-center overflow-hidden"
              preview={false}
              src={post.image} />
          </div>
          <div className="flex flex-col flex-1 px-4 py-4">
            <div className="flex justify-between">
              <div className="flex flex-1 items-center">
                <Avatar src={post.author.defaultAvatar} />
                <div className="flex flex-col ml-3 leading-5">
                  <span className="font-extrabold">{post.author.username}</span>
                  <span className="font-light">{new Date(post.createdAt).toLocaleDateString()}</span>
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
      </div>
    </>
  )
}
export default memo(PostDetail)
