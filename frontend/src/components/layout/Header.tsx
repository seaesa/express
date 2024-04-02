import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  HomeOutlined,
  MessageOutlined,
  PlusCircleOutlined,
  CompassOutlined,
  HeartOutlined,
  SearchOutlined,
  BookOutlined,
  SettingOutlined,
  ReloadOutlined,
  UserOutlined
} from '@ant-design/icons';

import Express from '../../assets/images/express.png';
import { useUser } from '../../context/UserContext';
import Image from '../image/Image';

const Header: React.FC = (): JSX.Element => {
  const { user, setBool } = useUser();
  const [userOptionsOpen, setUserOptionsOpen] = useState<boolean>(false);
  const handleLogOut = (): void => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    setBool((bool: boolean) => !bool)
  }
  return (
    <>
      <header className='sticky top-0 border-b bg-white z-20'>
        <div className='container mx-auto p-4 flex items-center justify-between relative' style={{ maxWidth: 940 }}  >
          <Link to='/' className='absolute'>
            <img src={Express} alt='express' className='-mb-2 w-24 h-auto' />
          </Link>
          <div className='absolute left-1/2 -translate-x-1/2 bg-neutral-200 py-1.5 px-4 flex items-center rounded-md space-x-2'>
            <SearchOutlined className='text-neutral-400 text-xl' />
            <input type='text' className='outline-none bg-transparent' placeholder='Search' />
          </div>
          <div className='flex items-center space-x-5 text-2xl ml-auto'>
            <HomeOutlined className='cursor-pointer' />
            <MessageOutlined className='cursor-pointer' />
            <PlusCircleOutlined className='cursor-pointer' />
            <CompassOutlined className='cursor-pointer' />
            <HeartOutlined className='cursor-pointer' />
            <div className='relative'>
              <div className={`rounded-full flex items-center justify-center h-7 w-7 ${userOptionsOpen ? 'outline outline-1' : ''}`} >
                <Image
                  src={user!.avatar || user!.defaultAvatar}
                  onClick={() => setUserOptionsOpen((bool) => !bool)}
                />
              </div>
              {userOptionsOpen && (
                <div className='absolute top-9 -left-48 shadow-md bg-white rounded-md'>
                  {[
                    { icon: <UserOutlined />, label: 'Profile', link: `${user!.idUser}` },
                    { icon: <BookOutlined />, label: 'Saved' },
                    { icon: <SettingOutlined />, label: 'Settings' },
                    { icon: <ReloadOutlined />, label: 'Switch Accounts' },
                  ].map((option) => (
                    <Link to={option.link || ''} key={option.label}>
                      <div className='flex px-3 py-2.5 items-center space-x-2 w-56 cursor-pointer text-xl hover:bg-neutral-50 active:bg-neutral-200' >
                        {option.icon}
                        <p className='text-sm'>{option.label}</p>
                      </div>
                    </Link>
                  ))}
                  <div
                    onClick={handleLogOut}
                    className='flex p-3 items-center space-x-2 w- cursor-pointer text-xl border-t hover:bg-neutral-50 active:bg-neutral-200' >
                    <p className='text-sm'> Log Out </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
