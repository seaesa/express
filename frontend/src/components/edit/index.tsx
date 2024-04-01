import { CloseOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons"
import { Avatar, Button, Image } from "antd"
import Input from "antd/es/input/Input"
import Icon from "../icons/Icon"
import TextArea from "antd/es/input/TextArea"
import { useRef, useState } from "react"

const Edit = ({
  post,
  setEdit,
}: {
  post: any,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [title, setTitle] = useState<string>(post.title);
  const [image, setImage] = useState<string>('');
  const fileRef = useRef(null)
  const handleSubmit = (e: React.MouseEvent) => {

  }
  const handleChangeImage = (e: any) => {
    const url = URL.createObjectURL((fileRef.current as any).files[0])
    setImage(url)
  }
  return (
    <>
      <div className="z-50 absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60">
        <div
          onClick={e => setEdit(false)}
          className="absolute top-4 right-4 cursor-pointer hover:text-gray-50">
          <CloseOutlined style={{ fontSize: '24px', color: 'gray' }} />
        </div>
        <div className="overflow-hidden flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[70%] h-[70%] rounded-2xl">
          <div className="flex justify-between items-center">
            <Button type="text">Hủy</Button>
            <h1 className="font-bold text-xl">Chỉnh sửa thông tin</h1>
            <Button
              onClick={handleSubmit}
              type="primary">Xong</Button>
          </div>
          <hr />
          <div className="flex h-full">
            <div className="w-1/2 bg-gray-950">
              <input
                onChange={handleChangeImage}
                ref={fileRef}
                type="file" hidden name="image" />
              <Image
                onClick={e => (fileRef.current as any).click()}
                src={image ? image : post.image}
                preview={false}
                className="object-contain object-center hover:opacity-75 cursor-pointer" height='100%' width='100%' />
            </div>
            <div className="flex flex-col px-4 py-3 flex-1">
              <div className="flex items-center">
                <Avatar src={post.author.defaultAvatar} />
                <h2 className="font-bold text-lg ml-2">hihi</h2>
              </div>
              <div className="my-2">
                <TextArea
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                  autoSize={{ minRows: 3, maxRows: 5 }} variant="borderless" />
                <div className="flex justify-between my-2">
                  <Icon icon={SmileOutlined} />
                  <span className="font-bold text-sm">0/2.200</span>
                </div>
              </div>
              <div className="flex flex-col">
                <Input width='100%' variant="borderless" size="large" placeholder="Location" />
                <div className="flex justify-between pl-3 cursor-pointer">
                  <div className="font-bold text-lg">Trợ Năng</div>
                  <DownOutlined style={{ fontSize: '18px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Edit