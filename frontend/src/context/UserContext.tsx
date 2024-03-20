import { ReactNode, createContext, useContext, useState } from "react";
import { ThemeTypes } from "../types/verifyType";

const initContext: ThemeTypes = {
  user: false,
  login() { }
}
const UserContext = createContext({ ...initContext });

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean>(() => {
    const value = `; ${document.cookie}`;
    const parts: Array<any> = value.split(`; jwt=`);
    const data = parts.pop().split(';').shift();
    if (data) {
      return true
    } else return false
  })
  const login = () => {
    setUser(true)
  }
  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)

