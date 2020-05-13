import axios from 'axios'

//创建请求实例(可以根据不同的数据创建多个实例)
export function request(config){
  //创建实例(并设置一些基础的默认的配置)
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config //这里记得一定要返回
  }, err => {
     console.log(err)
  })
  
  //响应拦截
  instance.interceptors.response.use(config => {
    return config.data //这里记得一定要返回
  }, err => {
    console.log(err)
  })

  //发送真正的请求
  return instance(config)
}