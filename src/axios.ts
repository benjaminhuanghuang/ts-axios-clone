import Axios from './core/Axios';
import { AxiosInstance} from './types'
import {extend} from './helpers/util'

// Function method
function createInstance():AxiosInstance{
  const constext = new Axios();
  const instance = Axios.prototype.request.bind(constext)

  extend(instance, constext)
  return instance as AxiosInstance
}

const axios = createInstance()
export default axios
