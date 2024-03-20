import Suggestion from "./Sugguest";

export default function Suggest() {
  return (
    <div>
      <div className='flex items-center justify-between text-sm font-medium'>
        <p className='text-neutral-400'>Suggestions For You</p>
        <p className='cursor-pointer' style={{ fontSize: 12 }}>
          See All
        </p>
      </div>
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </div>
  )
}