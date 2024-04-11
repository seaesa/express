import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { App, ConfigProvider } from "antd";
import Cookies from "js-cookie";

import { http } from "../service/axios";
import { ResponseServer, User, initialContext } from "../types";

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
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null);
  const [bool, setBool] = useState<boolean>(false);

  useEffect(() => {
    (async (): Promise<void> => {
      const token: any = Cookies.get('token')
      if (token) {
        const user: ResponseServer = await http.post(`users/current`, { token });
        if (user.user) setUser(user.user);
        else setUser(null)
      } else {
        setUser(null)
      }
    })()
  }, [bool, navigate]);

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
