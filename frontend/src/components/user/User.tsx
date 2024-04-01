import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import Image from "../image/Image"

export default function User() {
  const { user } = useUser()

  return (
    <div className='flex items-center space-x-4 text-sm my-6'>
      <Link to={`/${user.idUser}`} className='h-16 w-16 bg-neutral-200 rounded-full'>
        <Image src={user.defaultAvatar} />
      </Link>
      <div className='flex-1'>
        <p className='font-medium'>{''}</p>
        <p className='text-neutral-400'>{''}</p>
      </div>
      <p className='text-blue-400 font-medium cursor-pointer'>Switch</p>
    </div>
  )
}