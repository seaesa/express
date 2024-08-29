import { memo } from "react";
import Suggest from "../suggestion";
import User from "../user/User";
import Footer from "./Footer";

const RightSide: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col col-span-1">
        <User />
        <Suggest />
        <Footer />
      </div>
    </>
  )
}

export default memo(RightSide)
