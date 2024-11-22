import { Outlet } from "react-router-dom";

import Header from "../layout/Header";
import LeftSide from "../layout/LeftSide";
import RightSide from "../layout/RightSide";
import Action from "../action";

const Template: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="container mx-auto grid grid-cols-4">
        <LeftSide />
        <div className="col-span-4 md:col-span-2 flex flex-col flex-1 overflow-y-auto max-h-[100vh] no-scrollbar items-center">
          <Action />
          <Outlet />
        </div>
        <RightSide />
      </div>
    </>
  )
}

export default Template