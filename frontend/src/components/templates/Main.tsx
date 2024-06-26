import { Outlet } from "react-router-dom";

import Header from "../layout/Header";
import LeftSide from "../layout/LeftSide";
import RightSide from "../layout/RightSide";
import Action from "../action";

const Template: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-between">
        <LeftSide />
        <div className="flex flex-col flex-1 mr-10 overflow-y-auto max-h-[100vh] no-scrollbar">
          <Action />
          <Outlet />
        </div>
        <RightSide />
      </div>
    </>
  )
}

export default Template