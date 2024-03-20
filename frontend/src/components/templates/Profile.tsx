import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
export default function Profile() {
  return (
    <>
      <Header />
      <Outlet />
    </>

  )
}