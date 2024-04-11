import { memo } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = (): JSX.Element => {

  return (
    <footer className="flex flex-col">
      <div className="text-sm">
        <ul className="my-2 overflow-hidden list-none max-w-[190px] mx-auto text-blue-400">
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Giới thiệu</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Trợ giúp</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Báo chí</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">API</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Việc làm</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Quyền riêng tư</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Điều khoản</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Vị trí</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Ngôn ngữ</Link>
          </li>
          <li className="inline-block mx-1 hover:underline">
            <Link to="/">Meta đã xác minh</Link>
          </li>
        </ul>
        <span>© 2024 INSTAGRAM FROM META</span>
      </div>
    </footer>

  )
}

export default memo(Footer)
