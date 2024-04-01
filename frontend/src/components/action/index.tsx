import Post from "../post/Post";
import Story from "../story";

export default function Action() {
  return (
    <div className="flex flex-col mt-6">
      <Story />
      <Post />
    </div>
  )
}