//module
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from "antd";
// components
import './Login.css';
import { http } from '../../service/axios';
import { useUser } from '../../context/UserContext';
import Loading from '../loading';
import { App } from 'antd';
import Cookies from 'js-cookie';
const Login = () => {
  const { setUser } = useUser();
  const { message, modal } = App.useApp()
  // hooks 
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  // handle
  const handleSubmit = async (e: React.MouseEvent) => {
    setLoading(true)
    e.preventDefault();
    const data: any = await http.post('/auth/login', { username, password });
    if (data.user) {
      // Cookies.set('user', data.user._id.toString(), { expires: new Date(new Date().getTime() + 15 * 60 * 1000) })
      Cookies.set('token', data.token, { expires: new Date(new Date().getTime() + 15 * 60 * 2000) })
      Cookies.set('refreshToken', data.refeshToken)
      setUser(data.user)
      setLoading(false)
      message.success({
        content: 'success',
      })
    } else {
      modal.error({
        title: 'Error',
        content: data.message,
      });
      setLoading(false)
    }
  }
  return (
    <>
      <App>
        <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
          <div className="relative bg-white border border-gray-300 w-80 pb-8 pt-28 flex items-center flex-col mb-3">
            <div className="bg-no-repeat instagram-logo absolute"></div>
            <Form className='mt-8 w-64 flex flex-col'>
              <Form.Item
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]} >
                <Input
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder='username' name='username' />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: 'Please input your password!' }]} >
                <Input.Password
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='password' name='password' />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  onClick={handleSubmit}
                  type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div className="flex justify-evenly space-x-2 w-64 mt-4">
              <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
              <span className="flex-none uppercase text-xs text-gray-400 font-semibold">or</span>
              <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            </div>
            <button className="mt-4 flex">
              <div className="bg-no-repeat facebook-logo mr-1"></div>
              <span className="text-xs text-blue-900 font-semibold">Log in with Facebook</span>
            </button>
            <a href='/' className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4">Forgot password?</a>
          </div>
          <div className="bg-white border border-gray-300 text-center w-80 py-4">
            <span className="text-sm">Don't have an account?</span>
            <Link to='/signup' className="text-blue-500 text-sm font-semibold">Sign up</Link>
          </div>
        </div>
        {loading && <Loading />}
      </App>
    </>
  )
}
export default Login