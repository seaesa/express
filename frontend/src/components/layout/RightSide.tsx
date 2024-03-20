import Suggest from "../suggestion";
import User from "../user/User";
import Footer from "./Footer";

export default function RightSide() {
  return (
    <div className="flex flex-col mx-32">
      <User />
      <Suggest />
      <Footer />
    </div>
  )
} 