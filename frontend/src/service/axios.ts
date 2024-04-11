import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

// class HTTP {
//   private http: AxiosInstance
//   constructor(http: AxiosInstance) {
//     this.http = http
//   }
//   async get(path: string, config?: object): Promise<Response> {
//     const res = await this.http.get(path, config);
//     return res.data;
//   }
//   async post(path: string, data: object, config?: object): Promise<Response> {
//     const res = await this.http.post(path, data, config);
//     return res.data;
//   }
//   async postForm(path: string, data: object, config?: object): Promise<Response> {
//     const res = await this.http.postForm(path, data, config);
//     return res.data;
//   }
//   async put(path: string, data: object, config?: object): Promise<Response> {
//     const res = await this.http.put(path, data, config);
//     return res.data;
//   }
//   async patch(path: string, data: object, config?: object): Promise<Response> {
//     const res = await this.http.patch(path, data, config);
//     return res.data;
//   }
//   async delete(path: string, config?: object): Promise<Response> {
//     const res = await this.http.delete(path, config);
//     return res.data;
//   }
// }

// create new instance
const http = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});
const cloudinary = axios.create({
  baseURL: `${process.env.REACT_APP_API_CLOUDINARY}/ddsypvnqg`
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