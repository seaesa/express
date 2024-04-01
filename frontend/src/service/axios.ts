import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';


class HTTP {
  private http: AxiosInstance
  constructor(http: AxiosInstance) {
    this.http = http
  }
  async get(path: string, config?: object): Promise<Response> {
    const res = await this.http.get(path, config);
    return res.data;
  }
  async post(path: string, data: object, config?: object): Promise<Response> {
    const res = await this.http.post(path, data, config);
    return res.data;
  }
  async postForm(path: string, data: object, config?: object): Promise<Response> {
    const res = await this.http.postForm(path, data, config);
    return res.data;
  }
  async put(path: string, data: object, config?: object): Promise<Response> {
    const res = await this.http.put(path, data, config);
    return res.data;
  }
  async patch(path: string, data: object, config?: object): Promise<Response> {
    const res = await this.http.patch(path, data, config);
    return res.data;
  }
  async delete(path: string, config?: object): Promise<Response> {
    const res = await this.http.delete(path, config);
    return res.data;
  }
}

// create new instance
const server = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});
const cloud = axios.create({
  baseURL: `${process.env.REACT_APP_API_CLOUDINARY}/ddsypvnqg`
})

// config http server
server.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get('token')}`
  return config
})

server.interceptors.response.use(res => res, async (error) => {
  console.log(error)
  return Promise.reject(error)
})


export const http = new HTTP(server)
export const cloudinary = new HTTP(cloud)