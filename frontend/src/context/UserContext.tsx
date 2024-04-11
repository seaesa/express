import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { App, ConfigProvider } from "antd";
import { ResponseServer, User, initialContext } from "../types";
import { http } from "../service/axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// context
const context: initialContext = {
  user: null,
  bool: false,
  setUser() { },
  setBool() { },
}
const UserContext = createContext(context);

interface ThemeProviderTypes {
  children: React.ReactNode
}
const ThemeProvider: React.FC<ThemeProviderTypes> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [bool, setBool] = useState<boolean>(false);
  const navigate = useNavigate();

  const getCurrentUser = useCallback(async (): Promise<void> => {
    const token: any = Cookies.get('token')
    if (token) {
      const user: ResponseServer = await http.post(`users/current`, { token });
      if (user.user) setUser(user.user);
      else {
        setUser(null)
        navigate('/login')
      }
    } else {
      setUser(null)
      navigate('/login')
    }
  }, [user])

  useEffect(() => {
    getCurrentUser()
  }, [bool]);

  return (
    <UserContext.Provider value={{ user, setUser, bool, setBool }}>
      <ConfigProvider theme={{
        components: {
          Button: {
            primaryColor: '#1677ff',
            algorithm: true
          },
        }, cssVar: true,
      }}>
        <App>
          {children}
        </App>
      </ConfigProvider>
    </UserContext.Provider>
  )
}
export const useUser = (): initialContext => useContext<initialContext>(UserContext)
export default ThemeProvider
