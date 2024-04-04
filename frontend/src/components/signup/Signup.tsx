import { useState } from 'react';
import { Link } from 'react-router-dom';
import { App, Button, Form, Image, Input } from 'antd';
import Cookies from 'js-cookie';

import { http } from '../../service/axios'
import { useUser } from '../../context/UserContext';
import Loading from '../loading';
import Express from '../../assets/images/express.png'

const SignUp: React.FC = (): JSX.Element => {
  const { setUser } = useUser();
  const { modal, message } = App.useApp()

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.MouseEvent) => {
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) return
    else if (confirmPassword === password) {
      e.preventDefault()
      setLoading(true)
      const data: any = await http.post('/auth/register', { username, password });
      if (data.user) {
        Cookies.set('token', data.token, { expires: new Date(new Date().getTime() + 15 * 60 * 2000) })
        Cookies.set('refreshToken', data.refeshToken)
        setUser(data.user)
        setLoading(false)
        message.success({
          content: 'success',
        })
      } else {
        modal.error({
          'title': 'Error',
          content: data.message
        })
        setLoading(false)
      }
    } else
      modal.error({
        title: 'Error',
        content: 'mật khẩu không trùng khớp'
      })
  }
  return (
    <>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="rounded-lg shadow-lg relative bg-white w-80 pb-8 flex items-center flex-col mb-3">
          <Image src={Express} preview={false} style={{ width: '145px', height: '145px' }} />
          <Form className="w-64 flex flex-col">
            <Form.Item name='username' rules={[{ required: true }]}>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                value={username} name='username' placeholder="username" autoComplete='' />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true }]}>
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                value={password} name='password' placeholder="password" />
            </Form.Item>
            <Form.Item name='confirmPassword' rules={[{ required: true }]}>
              <Input.Password
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword} name='confirmPassword' placeholder="confirm password" />
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} className='w-full' type='primary' htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="bg-white text-center w-80 py-4 rounded-lg shadow-lg">
          <span className="text-sm mx-2">You have an account?</span>
          <Link to='/login' className="text-blue-500 text-sm font-semibold">Login</Link>
        </div>
      </div>
      {loading && <Loading />}
    </>
  )
}
export default SignUp
