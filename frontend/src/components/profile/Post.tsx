import { Link } from "react-router-dom";

import Image from "../image/Image";
import { Post } from "../../types";

interface PostTypes {
  post: Post
}
const PostCP: React.FC<PostTypes> = ({ post }): JSX.Element => {
  return (
    <>
      <Link to={`/post/${post.slug}`}>
        <div className="flex-1 text-center px-4 py-2 m-2">
          <div className="w-full h-80">
            <Image src={post.image} className="rounded-none outline-none outline-0" />
          </div>
        </div>
      </Link>
    </>
  )
}
export default PostCP
