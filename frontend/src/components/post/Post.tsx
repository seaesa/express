import { useRef, useState } from "react"
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import { http, cloudinary } from "../../service/axios";
import { useUser } from "../../context/UserContext";
import Loading from "../loading";
import Image from "../image/Image";

const Post: React.FC = (): JSX.Element => {
  const { user, setBool } = useUser();
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddPost = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const { url }: any = await cloudinary.postForm('/image/upload', {
      file,
      upload_preset: 'dy7el9da',
      cloud_name: 'ddsypvnqg',
      folder: 'express/image',
    });
    await http.post('/posts/create', { url, title, author: user!._id });
    setBool((bool: any) => !bool);
    setTitle('');
    setImage('');
    setLoading(false)
  }

  return (
    <>
      <div className="bg-white shadow-md rounded-lg mb-6 p-4 w-full md:w-5/6">
        <Input.TextArea
          onChange={e => setTitle(e.target.value)}
          value={title} name="message"
          placeholder="Content..." className="border-none"></Input.TextArea>
        {image &&
          <div className="overflow-y-auto max-h-96 no-scrollbar relative">
            <CloseOutlined
              onClick={e => setImage('')}
              className="text-lg absolute top-2 right-2 cursor-pointer hover:text-white hover:scale-125 transition-all" />
            <Image src={image} className="rounded-none" />
          </div>
        }
        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            <input
              onChange={(e: React.ChangeEvent) => {
                setImage(URL.createObjectURL((e.target as any).files[0]));
                setFile((e.target as any).files[0])
              }}
              ref={imageRef}
              type="file" name="image" hidden id="" />
            <span
              onClick={() => imageRef.current!.click()}
              className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </span>
            <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </span>
          </div>
          <Button
            disabled={(title && image) ? false : true}
            onClick={handleAddPost}
            type="primary" icon={<SendOutlined rotate={-45} />} >
            Send
          </Button>
        </div>
      </div>
      {loading && <Loading />}
    </>
  )
}

export default Post
