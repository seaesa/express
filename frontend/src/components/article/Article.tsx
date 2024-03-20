import { useState } from 'react';
// import BookMark from '../../assets/images/bookmark.svg'
import {
  HeartOutlined,
  EllipsisOutlined,
  SendOutlined,
  MessageOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import ArticleMenu from './ArticleMenu';

export default function Article() {

  const [contextMenuOpen, setContextMenuOpen] = useState<boolean>(false);
  return (<div className='border bg-white rounded-xl mb-4'>
    <ArticleMenu
      open={contextMenuOpen}
      setOpen={setContextMenuOpen}
    />

    <div className='flex items-center justify-between p-2.5'>
      <div className='flex items-center'>
        <div className='h-10 w-10 bg-neutral-200 rounded-full'>
          <img
            src='https://m.media-amazon.com/images/I/61Swr8GQUzL.jpg'
            alt=''
            className='rounded-full'
          />
        </div>
        <div className='ml-2.5'>
          <p className='font-medium text-sm'>{'wefwefwefwef'}</p>
          <p style={{ fontSize: 12 }}>{'wefwefwefwecwf'}</p>
        </div>
      </div>
      <EllipsisOutlined
        className='text-lg mr-2 cursor-pointer'
        onClick={() => setContextMenuOpen(true)}
      />
    </div>
    <div className='w-full bg-neutral-200'>
      <img src='https://m.media-amazon.com/images/I/61Swr8GQUzL.jpg' alt='' className='w-full h-full' />
    </div>
    <div className='p-3'>
      <div className='flex items-center justify-between text-2xl'>
        <div className='flex items-center space-x-4'>
          <HeartOutlined
            className='cursor-pointer transition-all hover:opacity-50 active:scale-75'
          />
          <MessageOutlined className='cursor-pointer hover:opacity-50' />
          <SendOutlined className='cursor-pointer hover:opacity-50' />
        </div>
        {/* <BookMark /> */}
        {/* className='cursor-pointer hover:opacity-50' */}
      </div>
      <div className='flex items-center my-3 space-x-2'>
        <div className='flex items-center -space-x-2'>
          <div
            className='h-7 w-7 outline outline-2 border rounded-full bg-neutral-200 outline-white z-10'
          >
            <img
              src='https://m.media-amazon.com/images/I/61Swr8GQUzL.jpg'
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
          fwefwfwef
        </span>
        <span>wefwefweffwef</span>
      </div>
      <p className='text-neutral-500 font-medium text-sm my-2 cursor-pointer'>
        View all comments
      </p>
      <p
        className='my-2 text-neutral-400 text-sm uppercase'
        style={{ fontSize: 12 }}
      >
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
  )
}