import Suggestion from "./Sugguest";
import { useUser } from "../../context/UserContext";

export default function Suggest() {
  const { suggestUser } = useUser()
  return (
    <>
      {suggestUser &&
        <div>
          <div className='flex items-center justify-between text-sm font-medium'>
            <p className='text-neutral-400'>Suggestions For You</p>
            <p className='cursor-pointer' style={{ fontSize: 12 }}>
              See All
            </p>
          </div>
          {suggestUser && suggestUser.length > 0 &&
            suggestUser.map((user: any, index: number) => <Suggestion user={user} key={index} />)
          }
        </div>
      }
    </>
  )
}