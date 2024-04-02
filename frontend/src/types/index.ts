export interface User {
  _id: string,
  avatar?: string,
  defaultAvatar: string,
  gender: Array<string>,
  idUser: string,
  password?: string,
  username: string,
  displayName: string,
  phone: number | null,
  createdAt: Date,
  updatedAt: Date,
}
export interface ResponseServer extends Response {
  error?: boolean,
  message?: string,
  user?: User | null,
  suggestUser?: Array<User>
}
export interface initialContext {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  bool: boolean,
  setBool: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Post {
  author: User,
  slug: string,
  title: string,
  image: string
  createdAt: string,
  updatedAt: string
  _id: string,
}