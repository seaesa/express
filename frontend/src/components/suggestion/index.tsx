import { memo, useEffect, useState } from "react";

import Suggestion from "./Sugguest";
import { http } from "../../service/axios";
import { User } from "../../types";

const Suggest: React.FC = (): JSX.Element => {
  const [suggestUser, setSuggestUser] = useState<Array<User>>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const suggest: any = await http.get('/users/suggest')
      setSuggestUser(suggest.suggestUser)
    })()
  }, [])

  return (
    <>
      {suggestUser.length > 0 ?
        <div>
          <div className='flex items-center justify-between text-sm font-medium'>
            <p className='text-neutral-400'>Suggestions For You</p>
            <p className='cursor-pointer' style={{ fontSize: 12 }}> See All </p>
          </div>
          {suggestUser.map((suggest: User, index: number) => <Suggestion user={suggest} key={index} />)}
        </div>
        : <div className="my-6"></div>
      }
    </>
  )
}

export default memo(Suggest)
