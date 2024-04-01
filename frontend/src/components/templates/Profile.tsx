import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import { useUser } from "../../context/UserContext";
export default function Profile() {
  const { user } = useUser()
  return (
    <>
      {user &&
        <>
          <Header />
          <Outlet />
        </>
      }
    </>
  )
}