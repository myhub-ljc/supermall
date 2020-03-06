import axios from 'axios'

//创建请求实例
export function request(config){
  const instance = axios.create({
    baseURL: '',
    timeout: 1000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
     console.log(err)
  })
  
  //响应拦截
  instance.interceptors.response.use(config => {
    return config.data
  }, err => {
    console.log(err)
  })

  //发送真正的请求
  return instance(config)
}