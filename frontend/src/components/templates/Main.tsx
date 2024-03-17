import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import LeftSide from "../layout/LeftSide";
import RightSide from "../layout/RightSide";
import Action from "../action";

export default function Template() {
  return (
    <>
      <Header />
      <div className="flex">
        <LeftSide />
        <div className="flex flex-col">
          <Action />
          <Outlet />
        </div>
        <RightSide />
      </div>
    </>

  )
}