import { ExclamationCircleFilled } from "@ant-design/icons";
import { Alert } from "antd";
import { unmountComponentAtNode } from "react-dom";

export default function Message({ message }: { message: string }) {
  return (
    <div
      onAnimationEnd={(e: any) => unmountComponentAtNode(e.target)}
      className='absolute top-4 left-4 animate-trans'  >
      <Alert
        icon={<ExclamationCircleFilled />} showIcon={true} message={message}
        type='error' closable={true} />
    </div>
  )
}