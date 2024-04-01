import { ReactNode } from "react"

interface ImageType {
  src: string,
  className?: string,
  [prop: string]: any
}
const Image = ({ src, className, ...prop }: ImageType): ReactNode => {
  return (
    <img
      className={`cursor-pointer rounded-full object-cover object-center h-full w-full outline outline-white ${className}`}
      alt='avatar' src={src} {...prop} />
  )
}
export default Image