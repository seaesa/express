export interface User {
  defaultAvatar: string,
  gender: Array<string>,
  idUser: string,
  password: string,
  username: string,
  [other: string]: string | number | string[]
}
export interface ResponseServer extends Response {
  error?: boolean,
  message?: string,
  user?: User | null,
  suggestUser?: Array<User>
}