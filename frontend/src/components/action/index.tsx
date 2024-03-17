import Post from "../post/post";
import Story from "../story";

export default function Action() {
  return (
    <div className="flex flex-col">
      <Story />
      <Post />
    </div>
  )
}