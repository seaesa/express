import { Link } from "react-router-dom"
import { BellFilled, HomeFilled, MessageFilled, SettingFilled, TeamOutlined, UnorderedListOutlined } from "@ant-design/icons"

const LeftSide: React.FC = (): JSX.Element => {
  return (
    <>
      <aside className="hidden w-80 overflow-y-auto md:block flex-shrink-0">
        <div className="mt-12 p-2 flex justify-center">
          <Link to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <HomeFilled className="ml-2" />
            <span className="ml-2 text-sm tracking-wide truncate">Home</span>
          </Link>

        </div>
        <div className="my-2 p-2 flex justify-center">
          <Link to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <BellFilled className="ml-2" />
            <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
            <span
              className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
          </Link>
        </div>

        <div className="my-2 p-2 flex justify-center">
          <Link to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <MessageFilled className="ml-2" />
            <span className="ml-2 text-sm tracking-wide truncate">Messages</span>
          </Link>
        </div>

        <div className="my-2 p-2 flex justify-center">
          <Link to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <TeamOutlined className="ml-2" />
            <span className="ml-2 text-sm tracking-wide truncate">Friends</span>
            <span
              className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">(15)</span>
          </Link>
        </div>

        <div className="my-2 p-2 flex justify-center">
          <Link to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <UnorderedListOutlined className="ml-2" />
            <span className="ml-2 text-sm tracking-wide truncate">Lists</span>
          </Link>
        </div>

        <div className="my-2 p-2 flex justify-center">
          <Link to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <TeamOutlined className="ml-2" />
            <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
          </Link>
        </div>

        <div className="my-2 p-2 flex justify-center">
          <Link to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
            <SettingFilled className="ml-2" />
            <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
          </Link>
        </div>

      </aside>
    </>
  )
}

export default LeftSide
