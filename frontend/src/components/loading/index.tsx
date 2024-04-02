import { Spin } from "antd";
import { memo } from "react";
interface LoadingTypes {
  size?: "small" | "large" | "default"
}
const Loading: React.FC<LoadingTypes> = ({ size }): JSX.Element => {
  return (
    <>
      <Spin fullscreen size={size || 'large'} tip='Loading...' />
    </>
  )
}
export default memo(Loading)
