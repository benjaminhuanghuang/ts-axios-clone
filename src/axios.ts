import Axios from './core/Axios';
import { AxiosInstance, AxiosRequestConfig} from './types'
import {extend} from './helpers/util'
import defaults from './defaults'
// Function method
function createInstance(config: AxiosRequestConfig):AxiosInstance{
  const constext = new Axios(config);
  const instance = Axios.prototype.request.bind(constext)

  extend(instance, constext)
  return instance as AxiosInstance
}

const axios = createInstance(defaults)
export default axios
