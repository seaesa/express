import { useState } from 'react';
import Instagram from '../../assets/Instagram-wordmark.svg';
import Person from '../../assets/person.svg';
// import {
//   IoSearchOutline,
//   IoHomeOutline,
//   IoChatbubbleOutline,
//   IoAddCircleOutline,
//   IoCompassOutline,
//   IoHeartOutline,
//   IoPersonCircleOutline,
//   IoBookmarkOutline,
//   IoCogOutline,
//   IoSyncOutline,
// } from 'react-icons/io5';




import { HomeOutlined, MessageOutlined, PlusCircleOutlined, CompassOutlined, HeartOutlined, SearchOutlined, BookOutlined, SettingOutlined, ReloadOutlined } from '@ant-design/icons';
export default function Header() {
  const [userOptionsOpen, setUserOptionsOpen] = useState<boolean>(false);
  return (
    <header className='sticky top-0 border-b bg-white z-20'>
      <div
        className='container mx-auto p-4 flex items-center justify-between relative'
        style={{ maxWidth: 940 }}
      >
        <img
          src={Instagram}
          alt='instagram wordmark'
          className='h-7 -mb-2'
        />
        <div className='absolute left-1/2 -translate-x-1/2 bg-neutral-200 py-1.5 px-4 flex items-center rounded-md space-x-2'>
          <SearchOutlined className='text-neutral-400 text-xl' />
          <input
            type='text'
            className='outline-none bg-transparent'
            placeholder='Search'
          />
        </div>
        <div className='flex items-center space-x-5 text-2xl'>
          <HomeOutlined className='cursor-pointer' />
          <MessageOutlined className='cursor-pointer' />
          <PlusCircleOutlined className='cursor-pointer' />
          <CompassOutlined className='cursor-pointer' />
          <HeartOutlined className='cursor-pointer' />
          <div className='relative'>
            <div
              className={`rounded-full flex items-center justify-center h-7 w-7 ${userOptionsOpen ? 'outline outline-1' : ''
                }`}
            >
              <img
                src=''
                alt='avatar'
                className={`cursor-pointer rounded-full h-6 w-6 outline outline-white`}
                onClick={() => setUserOptionsOpen((prev) => !prev)}
              />
            </div>
            {userOptionsOpen ? (
              <div className='absolute top-9 -left-48 shadow-md bg-white rounded-md'>
                {[
                  { icon: <Person />, label: 'Profile' },
                  { icon: <BookOutlined />, label: 'Saved' },
                  { icon: <SettingOutlined />, label: 'Settings' },
                  { icon: <ReloadOutlined />, label: 'Switch Accounts' },
                ].map((option) => (
                  <div
                    key={option.label}
                    className='flex px-3 py-2.5 items-center space-x-2 w-56 cursor-pointer text-xl hover:bg-neutral-50 active:bg-neutral-200'
                    onClick={() => setUserOptionsOpen(false)}
                  >
                    {option.icon}
                    <p className='text-sm'>{option.label}</p>
                  </div>
                ))}
                <div className='flex p-3 items-center space-x-2 w- cursor-pointer text-xl border-t hover:bg-neutral-50 active:bg-neutral-200'>
                  <p className='text-sm'>
                    Log Out
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

