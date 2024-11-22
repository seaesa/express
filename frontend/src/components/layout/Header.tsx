import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  HomeOutlined,
  MessageOutlined,
  PlusCircleOutlined,
  CompassOutlined,
  HeartOutlined,
  BookOutlined,
  SettingOutlined,
  ReloadOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Express from '../../assets/images/express.png';
import { useUser } from '../../context/UserContext';
import Image from '../image/Image';
import { http } from '../../service/axios';
import { Input } from 'antd';
import Icon from '../icons/Icon';

const Header: React.FC = (): JSX.Element => {
  const { user, setBool } = useUser();
  const [userOptionsOpen, setUserOptionsOpen] = useState<boolean>(false);
  const handleLogOut = async (): Promise<void> => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    await http.delete('auth/logout')
    setBool((bool: boolean) => !bool)
  }
  return (
    <>
      <header className='sticky top-0 border-b bg-white z-20'>
        <div className='container mx-auto p-4 flex items-center justify-between relative max-h-24' style={{ maxWidth: 940 }}  >
          <Link to='/' >
            <img src={Express} alt='express' className='-mb-2 w-24 h-auto' />
          </Link>
          <div className='ml-auto'>
            <Input.Search variant='filled' allowClear enterButton placeholder='Search...' />
          </div>
          <div className='flex items-center space-x-5 text-2xl ml-auto'>
            <div className='hidden md:block space-x-4'>
              <Icon icon={HomeOutlined} />
              <Icon icon={MessageOutlined} />
              <Icon icon={PlusCircleOutlined} />
              <Icon icon={CompassOutlined} />
              <Icon icon={HeartOutlined} />
            </div>
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
