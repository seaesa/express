import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "../../context/UserContext"
const VerifyLogin: React.FC = () => {
  const { user } = useUser();
  return (
    <>
      {user ? <Navigate to='/' /> : <Outlet />}
    </>
  )
}
export default VerifyLogin;
