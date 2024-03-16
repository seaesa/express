import axios from 'axios';
// create new request
const http = axios.create({
  baseURL: process.env.REACT_APP_REQUEST_URL
})

// config request
export const get = async (path: string, config?: object): Promise<Response> => {
  const response = await http.get(path, config);
  return response.data
}
export const post = async (path: string, data: object, config?: object): Promise<Response> => {
  const response = await http.post(path, data, config);
  return response.data
}
export const put = async (path: string, data: object, config?: object): Promise<Response> => {
  const response = await http.put(path, data, config);
  return response.data
}
export const patch = async (path: string, data: object, config?: object): Promise<Response> => {
  const response = await http.patch(path, data, config);
  return response.data
}
