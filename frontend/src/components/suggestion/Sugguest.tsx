import { Link } from "react-router-dom";
import Image from "../image/Image";

const Suggestion = ({ user }: { user: any }) => {
  return (
    <div className='flex items-center space-x-4 text-sm my-4'>
      <div className='h-10 w-10 bg-neutral-200 rounded-full'>
        <Link to='/' className="h-full w-full">
          <Image
            src={user.defaultAvatar}
          />
        </Link>
      </div>
      <div>
        <span className="font-medium">{user.username}</span>
      </div>
      <div className='flex-1'>
        <p className='font-medium'>{''}</p>
        <p className='text-neutral-400'>{''}</p>
      </div>
      <p className='text-blue-400 font-medium cursor-pointer'> Follow  </p>
    </div>
  );
};

export default Suggestion;
