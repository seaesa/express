import { Dispatch, SetStateAction, memo } from 'react';
import { Button, Flex } from 'antd';
import { http } from '../../service/axios';
import { useUser } from '../../context/UserContext';

const ArticleMenu = ({
  open,
  setOpen,
  id,
  setLoading,
  setEdit,
  post
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setEdit: Dispatch<SetStateAction<boolean>>,
  id: string,
  post: any
}) => {
  const { setBool, user } = useUser()
  const handleDeletePost = async (e: React.MouseEvent) => {
    setOpen(false);
    setLoading(true);
    await http.delete('/posts/delete', {
      data: { id }
    })
    setBool((bool: boolean) => !bool);
    setLoading(false)
  }
  const handleEdit = async (e: React.MouseEvent) => {
    setEdit(true)
  }
  return open ? (
    <>
      <div
        className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-40'
        onClick={() => setOpen(false)}
      ></div>
      <div className='fixed w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-xl overflow-hidden text-sm shadow'>
        <Flex gap='small' vertical>
          {(post.author._id === user._id) ?
            <>
              <Button
                onClick={handleDeletePost}
                type='text' danger>Delete</Button>
              <Button
                onClick={handleEdit}
                type='text'>Edit</Button>
              <Button type='text'>Go to post</Button>
              <Button type='text'>Share to...</Button>
              <Button type='text'>Copy link</Button>
              <Button type='text'>Embed</Button>
            </>
            : <>
              <Button type='text' danger>Report</Button>
              <Button type='text'>Unfollow</Button>
              <Button type='text'>Go to post</Button>
              <Button type='text'>Share to...</Button>
              <Button type='text'>Copy link</Button>
              <Button type='text'>Embed</Button>
            </>
          }
        </Flex>
      </div>
    </>
  ) : null;
};

export default memo(ArticleMenu);
