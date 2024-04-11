import { Outlet } from "react-router-dom"

import { useUser } from "../../context/UserContext"
const Verify: React.FC = (): JSX.Element => {
  const { user } = useUser();
  return (
    <>
      {user && <Outlet />}
    </>
  )
}
export default Verify
