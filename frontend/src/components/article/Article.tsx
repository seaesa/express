import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Image } from 'antd';
import {
  HeartOutlined,
  EllipsisOutlined,
  SendOutlined,
  MessageOutlined,
  SmileOutlined,
} from '@ant-design/icons';

import ArticleMenu from './ArticleMenu';
import Icon from '../icons/Icon';
import PostDetail from '../box/PostDetail';
import Loading from '../loading';
import Edit from '../edit';
import { Post } from '../../types';
import ImageComponent from '../image/Image';

interface ArticleTypes {
  post: Post
}
const Article: React.FC<ArticleTypes> = ({ post }): JSX.Element => {

  const [contextMenuOpen, setContextMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleContextMenuOpen = useCallback(() => setContextMenuOpen(true), [])

  return (
    <>
      <div className='border bg-white rounded-xl mb-4 w-11/12'>
        {contextMenuOpen &&
          <ArticleMenu post={post} open={contextMenuOpen} setOpen={setContextMenuOpen} setLoading={setLoading} id={post._id} setEdit={setEdit} />
        }
        <div className='flex items-center justify-between p-2.5'>
          <div className='flex items-center'>
            <Link to={post.author.idUser}>
              <Avatar src={post.author.avatar || post.author.defaultAvatar} />
            </Link>
            <div className='ml-2.5'>
              <p className='font-medium text-sm'>{post.author.username}</p>
              <p style={{ fontSize: 12 }}>{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <EllipsisOutlined
            onClick={handleContextMenuOpen}
            className='text-lg mr-2 cursor-pointer' />
        </div>
        <div className='w-full bg-neutral-200 h-[500px]'>
          <Image src={post.image} height='100%' width='100%' className='object-cover object-center' />
        </div>
        <div className='p-3'>
          <div className='flex items-center justify-between text-2xl'>
            <div className='flex items-center space-x-4'>
              <Icon icon={HeartOutlined} />
              <div
                onClick={() => setShow((show: boolean) => !show)}
                className='flex'>
                <Icon icon={MessageOutlined} />
              </div>
              <Icon icon={SendOutlined} />
            </div>
          </div>
          <div className='flex items-center my-3 space-x-2'>
            <div className='flex items-center -space-x-2'>
              <div className='h-7 w-7 outline outline-2 border rounded-full bg-neutral-200 outline-white z-10' >
                <ImageComponent src={post.image} />
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
      {edit && <Edit setEdit={setEdit} post={post} setOpen={setContextMenuOpen} setLoading={setLoading} />}
      {loading && <Loading />}
    </>
  )
}
export default Article