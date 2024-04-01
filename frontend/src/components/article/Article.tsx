import { memo, useCallback, useState } from 'react';
// import BookMark from '../../assets/images/bookmark.svg'
import {
  HeartOutlined,
  EllipsisOutlined,
  SendOutlined,
  MessageOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import ArticleMenu from './ArticleMenu';
import { Avatar, Image } from 'antd';
import Icon from '../icons/Icon';
import PostDetail from '../box/PostDetail';
import Loading from '../loading';
import Edit from '../edit';

const Article = ({ post }: { post: any }) => {
  const [contextMenuOpen, setContextMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleShowPost = async (e: React.MouseEvent) => {
    setShow((show: boolean) => !show)
  }
  const handleContextMenuOpen = useCallback(() => setContextMenuOpen(true), [])
  return (
    <>
      <div className='border bg-white rounded-xl mb-4 w-11/12'>
        <ArticleMenu post={post} open={contextMenuOpen} setOpen={setContextMenuOpen} setLoading={setLoading} id={post._id} setEdit={setEdit} />
        <div className='flex items-center justify-between p-2.5'>
          <div className='flex items-center'>
            <Avatar src={post.author.defaultAvatar} />
            <div className='ml-2.5'>
              <p className='font-medium text-sm'>{post.author.username}</p>
              <p style={{ fontSize: 12 }}>{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <EllipsisOutlined
            className='text-lg mr-2 cursor-pointer'
            onClick={handleContextMenuOpen}
          />
        </div>
        <div className='w-full bg-neutral-200 h-[500px]'>
          <Image src={post.image} height='100%' width='100%' className='object-cover object-center' />
        </div>
        <div className='p-3'>
          <div className='flex items-center justify-between text-2xl'>
            <div className='flex items-center space-x-4'>
              <Icon icon={HeartOutlined} />
              <div
                onClick={handleShowPost}
                className='flex'>
                <Icon icon={MessageOutlined} />
              </div>
              <Icon icon={SendOutlined} />
            </div>
          </div>
          <div className='flex items-center my-3 space-x-2'>
            <div className='flex items-center -space-x-2'>
              <div
                className='h-7 w-7 outline outline-2 border rounded-full bg-neutral-200 outline-white z-10'
              >
                <img
                  src={post.image}
                  alt=''
                  className='rounded-full'
                />
              </div>
            </div>
            <div className='my-2 text-sm'>
              <span>Liked by&nbsp;</span>
            </div>
          </div>
          <div className='text-sm my-2'>
            <span className='font-medium inline-block mr-2'>
              {post.title}
            </span>
          </div>
          <p className='text-neutral-500 font-medium text-sm my-2 cursor-pointer'>
            View all comments
          </p>
          <p className='my-2 text-neutral-400 text-sm uppercase' style={{ fontSize: 12 }} >
          </p>
        </div>
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
      {show && <PostDetail setShow={setShow} post={post} />}
      {edit && <Edit setEdit={setEdit} post={post} />}
      {loading && <Loading />}
    </>
  )
}
export default memo(Article)