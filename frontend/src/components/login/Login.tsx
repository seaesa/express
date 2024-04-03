//module
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { App, Button, Form, Image, Input } from "antd";
import Cookies from 'js-cookie';
import { auth, facebookAuth, googleAuth } from '../../db/firebase';
import { signInWithPopup } from 'firebase/auth';
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
// components
import { http } from '../../service/axios';
import { useUser } from '../../context/UserContext';
import Loading from '../loading';
import Express from '../../assets/images/express.png';

const Login: React.FC = (): JSX.Element => {
  const { setUser } = useUser();
  const { message, modal } = App.useApp();
  // hooks 
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  // handle
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return
    else {
      setLoading(true)
      const data: any = await http.post('/auth/login', { username, password });
      if (data.user) {
        Cookies.set('token', data.token, { expires: new Date(new Date().getTime() + 15 * 60 * 2000) })
        Cookies.set('refreshToken', data.refreshToken)
        setUser(data.user)
        setLoading(false)
        message.success({ content: 'success' })
      } else {
        modal.error({ title: 'Error', content: data.message, });
        setLoading(false)
      }
    }
  }
  const handleSignInWithGoogle = async (e: React.MouseEvent) => {
    e.preventDefault()
    const result = await signInWithPopup(auth, googleAuth);
    const user = result.user;
    const data: any = await http.post('/auth/google', {
      username: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      image: user.photoURL,
      id: user.uid,
      displayName: user.displayName
    })
    if (data.user) {
      Cookies.set('token', data.token)
      Cookies.set('refreshToken', data.refreshToken)
      setUser(data.user)
      message.success({ content: 'Login Successfully', })
    }
  }
  const handleSignInWithFacebook = async (e: React.MouseEvent) => {
    e.preventDefault();
    const result = await signInWithPopup(auth, facebookAuth);
    const user = result.user;
    const data: any = await http.post('/auth/facebook', {
      username: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      image: user.photoURL,
      displayName: user.displayName
    })
    if (data.user) {
      Cookies.set('token', data.token)
      Cookies.set('refreshToken', data.refreshToken)
      setUser(data.user)
      message.success({ content: 'success' })
    }
  }
  return (
    <>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="rounded-lg shadow-lg relative bg-white w-80 pb-8 flex items-center flex-col mb-3">
          <Image src={Express} preview={false} style={{ width: '145px', height: '145px' }} />
          <Form className='w-64 flex flex-col'>
            <Form.Item name='username' rules={[{ required: true, whitespace: true }]} >
              <Input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='username' name='username' />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, whitespace: true }]} >
              <Input.Password
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='password' name='password' />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                onClick={handleSubmit}
                type="primary" htmlType="submit"> Submit </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-evenly space-x-2 w-64">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">or Sign In With</span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          </div>
          <div className='my-4'>
            <Button
              onClick={handleSignInWithFacebook}
              className='mx-2' type='primary' icon={<FacebookFilled />}>
              FaceBook
            </Button>
            <Button
              onClick={handleSignInWithGoogle}
              className='mx-2' type='primary' icon={<GoogleOutlined />}>
              Google
            </Button>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-white text-center w-80 py-4">
          <span className="text-sm mx-2">Don't have an account?</span>
          <Link to='/signup' className="text-blue-500 text-sm font-semibold">Sign up</Link>
        </div>
      </div>
      {loading && <Loading />}
    </>
  )
}

export default Login
