import { Outlet } from "react-router-dom";

import Header from "../layout/Header";

const Profile: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Profile
