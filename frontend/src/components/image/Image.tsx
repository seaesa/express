import { memo } from "react"

interface ImageType {
  src: string,
  className?: string,
  [prop: string]: any
}
const Image: React.FC<ImageType> = ({ src, className, ...prop }): JSX.Element => {
  return (
    <img
      className={`cursor-pointer rounded-full object-cover object-center h-full w-full outline outline-white ${className}`}
      alt='avatar' src={src} {...prop} />
  )
}

export default memo(Image)
