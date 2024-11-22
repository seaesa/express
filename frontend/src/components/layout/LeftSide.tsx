import { Link } from "react-router-dom"
import { BellFilled, HomeFilled, MessageFilled, SettingFilled, TeamOutlined, UnorderedListOutlined } from "@ant-design/icons"

const Navbar = ({ title, icon: Icon, children }: { title: string, icon: any, children?: React.ReactNode }) => {
  return (
    <div className="p-2 flex justify-start">
      <Link to="/"
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
        <Icon className="ml-2" />
        <span className="ml-2 text-sm tracking-wide truncate">{title}</span>
        {children}
      </Link>
    </div>
  )
}
const LeftSide: React.FC = (): JSX.Element => {
  return (
    <>
      <aside className="hidden md:block flex-shrink-0 col-span-1">
        <Navbar title='Home' icon={HomeFilled} />
        <Navbar title='Notifications' icon={BellFilled} />
        <Navbar title='Messages' icon={MessageFilled} />
        <Navbar title='Friends' icon={TeamOutlined} >
          <span
            className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">(15)</span>
        </Navbar>
        <Navbar title='Lists' icon={UnorderedListOutlined} />
        <Navbar title='Settings' icon={SettingFilled} />
      </aside>
    </>
  )
}

export default LeftSide
