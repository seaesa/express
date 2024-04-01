import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import LeftSide from "../layout/LeftSide";
const Post: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-between">
        <LeftSide />
        <div className="flex flex-col flex-1 mr-10 overflow-y-auto max-h-[100vh] no-scrollbar">
          <Outlet />
        </div>
      </div>
    </>

  )
}
export default Post