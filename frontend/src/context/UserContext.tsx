import { createContext, useContext, useState, useEffect } from "react";
import { http } from "../service/axios";
import { ResponseServer, User } from "../types";
import { App, ConfigProvider, theme } from "antd";
import Cookies from "js-cookie";
// const initContext: any = {
//   user: null,
// }
const UserContext = createContext({} as any);


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [suggestUser, setSuggestUser] = useState<Array<User> | null>(null);
  const [bool, setBool] = useState<boolean>(false)
  useEffect(() => {
    (async () => {
      const token: any = Cookies.get('token')
      if (token) {
        const user: ResponseServer = await http.post(`users/current`, { token });
        if (user.user) setUser(user.user);
        else setUser(null)
        if (user.suggestUser) setSuggestUser(user.suggestUser)
      } else setUser(null)
    })()
  }, [bool]);

  return (
    <UserContext.Provider value={{ user, setUser, bool, setBool, suggestUser }}>
      <ConfigProvider >
        <App>
          {children}
        </App>
      </ConfigProvider>
    </UserContext.Provider>
  )
}
export default ThemeProvider

export const useUser = () => useContext(UserContext)

