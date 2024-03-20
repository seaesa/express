import './Login.css';
import { useState } from 'react';
import * as http from '../../service/axios';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import Message from '../box/Show';
export default function Login() {
  const { user, login } = useUserContext()
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data: any = await http.post('/user/login', { username, password });
    if (data.user) {
      document.cookie = `jwt=${data.token}`;
      login();
      console.log(data)
    } else {
      setMessage(data.message)
    }
  }
  return <>
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="relative bg-white border border-gray-300 w-80 pb-8 pt-28 flex items-center flex-col mb-3">
        {/* logo */}
        <div className="bg-no-repeat instagram-logo absolute"></div>
        <form className="mt-8 w-64 flex flex-col">
          <input autoFocus
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name='username'
            className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email" placeholder="username" type="text" />
          <input autoFocus
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
            className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password" placeholder="Password" type="password" />
          <button
            onClick={handleSubmit}
            className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium hover:bg-blue-400" >
            Log In
          </button>
        </form>
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
      <div className="mt-3 text-center">
        <span className="text-xs">Get the app</span>
        <div className="flex mt-3 space-x-2">
          <div className="bg-no-repeat apple-store-logo"></div>
          <div className="bg-no-repeat google-store-logo"></div>
        </div>
      </div>
    </div>
    {message && <Message message={message} />}
  </>
}