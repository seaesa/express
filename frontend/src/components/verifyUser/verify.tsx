import { Navigate, Outlet } from "react-router-dom"

import { useUser } from "../../context/UserContext"

const Verify: React.FC = (): JSX.Element => {
  const { user } = useUser()
  return (
    <>
      {user ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}
export default Verify
