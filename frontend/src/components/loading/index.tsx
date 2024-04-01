import { Spin } from "antd";
import { memo } from "react";
const Loading: React.FC = ({ size }: { size?: "small" | "large" | "default" }) => {
  return (
    <>
      <Spin fullscreen size={size || 'large'} tip='Loading...' />
    </>
  )
}
export default memo(Loading)