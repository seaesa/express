import Suggest from "../suggestion";
import User from "../user/User";
import Footer from "./Footer";

const RightSide: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col mx-32">
        <User />
        <Suggest />
        <Footer />
      </div>
    </>
  )
}

export default RightSide
