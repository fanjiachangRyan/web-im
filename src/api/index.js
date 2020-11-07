import axios from 'axios'
import { API_BASE_URL } from '../config'

const instance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (config.method === 'get') {
      config.params = config.params || {}
      config.params.t = new Date().getTime()
    } else if (config.method === 'post') {
      config.data = config.data || {}
      config.data.t = new Date().getTime()
    }

    config.headers.token = ''
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error =>
    Promise.reject(error)
)

const api = {}

api.getMethod = (data) => {
  return new Promise((resolve, reject) => {
    instance
      .get('', data)
      .then(response => {

        return reject(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

api.postMethod = () => {
  return new Promise((resolve, reject) => {
    instance
      .post('', {})
      .then(response => {
        return reject(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default api
