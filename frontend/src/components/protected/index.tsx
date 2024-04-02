import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const ProtectedRoute: React.FC = (): JSX.Element => {
  const { user } = useUser();
  return (
    <>
      {user ? <Navigate to='/' /> : <Outlet />}
    </>
  )
}
export default ProtectedRoute
