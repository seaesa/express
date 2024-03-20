import { Link } from "react-router-dom";

export default function Post() {
  return (
    <Link to=''>
      <div className="flex-1 text-center px-4 py-2 m-2">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        />
      </div>
    </Link>
  )
}