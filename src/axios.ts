import Axios from './core/Axios'
import { AxiosRequestConfig, AxiosStatic } from './types'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'
import CancelToken from './Cancel/CancelToken';
import Cancel, { isCancel } from './Cancel/Cancel';

// Function method
function  createInstance(config: AxiosRequestConfig): AxiosStatic {
  const constext = new Axios(config)
  const instance = Axios.prototype.request.bind(constext)

  extend(instance, constext)
  return instance as AxiosStatic
}

const axios = createInstance(defaults)
axios.create = function create(config){
  return createInstance(mergeConfig(defaults, config))
}
axios.CancelToken = CancelToken;
axios.Cancel = Cancel;
axios.isCancel = isCancel;

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

axios.Axios = Axios;

export default axios
