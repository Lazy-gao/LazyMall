import Axios from 'axios'

/**
 * 网络请求模块封装
 * @param config
 * @returns {AxiosPromise}
 */
export function request (config) {
  const instance = Axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.log(error)
  })

  // 响应拦截器
  instance.interceptors.response.use((result) => {
    return result.data
  }, (error) => {
    console.log(error)
  })

  return instance(config)
}
