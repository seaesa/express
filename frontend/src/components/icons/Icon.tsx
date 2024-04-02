import { memo } from "react"

interface IconTypes {
  icon: any
}
const Icon: React.FC<IconTypes> = ({ icon: Icon }): JSX.Element => {
  return (
    <>
      <Icon className='cursor-pointer transition-all hover:opacity-50 active:scale-75' style={{ fontSize: '24px' }} />
    </>
  )
}
export default memo(Icon)
