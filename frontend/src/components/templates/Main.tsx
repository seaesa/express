import { Navigate, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import LeftSide from "../layout/LeftSide";
import RightSide from "../layout/RightSide";
import Action from "../action";
import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";
export default function Template() {
  const { user } = useUserContext();
  return (
    <>
      {user ?
        <>
          <Header />
          <div className="container mx-auto flex justify-between">
            <LeftSide />
            <div className="flex flex-col flex-1 mr-10">
              <Action />
              <Outlet />
            </div>
            <RightSide />
          </div>
        </> : <Navigate to='/login' />
      }
    </>

  )
}