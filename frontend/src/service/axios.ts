import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';


// create new instance
const http = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});
const cloudinary = axios.create({
  baseURL: process.env.REACT_APP_API_CLOUDINARY
})

// config http server
http.interceptors.request.use((config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
  config.headers.Authorization = `Bearer ${Cookies.get('token')}`
  return config
})

http.interceptors.response.use(res => res.data, async (error) => {
  console.log(error)
  return Promise.reject(error)
})

cloudinary.interceptors.response.use(res => res.data, async (error) => {
  console.log(error)
  return Promise.reject(error)
})
export { http, cloudinary } 