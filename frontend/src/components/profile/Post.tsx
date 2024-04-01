import { Link } from "react-router-dom";
import Image from "../image/Image";

export default function Post({ post }: { post: any }) {
  return (
    <Link to={`/post/${post.slug}`}>
      <div className="flex-1 text-center px-4 py-2 m-2">
        <div className="w-full h-80">
          <Image src={post.image} className="rounded-none outline-none outline-0" />
        </div>
      </div>
    </Link>
  )
}