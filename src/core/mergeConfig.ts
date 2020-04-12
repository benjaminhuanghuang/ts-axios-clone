import { AxiosRequestConfig } from '../types';
import { deepMerge, isPlainObject } from '../helpers/util';

// merge strategy
const strats = Object.create(null);

// Use val2 if it is not undefined
function defaultStrat(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1;
}


// Use val2
function fromVal2Strat(val1: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2;
  }
}

// Merge header
function deepMergeStrat(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2);
  } else if (typeof val2 !== 'undefined') {
    return val2;
  } else if (isPlainObject(val1)) {
    return deepMerge(val1);
  } else if (typeof val1 !== 'undefined') {
    return val1;
  }
}

// Define the merge strategy
const stratKeysFromVal2 = ['url', 'params', 'data'];
stratKeysFromVal2.forEach(key => {
  strats[key] = fromVal2Strat;
});

const stratKeysDeepMerge = ['headers', 'auth'];
stratKeysDeepMerge.forEach(key => {
  strats[key] = deepMergeStrat;
});

/*
  Merge 2 config
*/
export default function mergeConfig(
  config1: AxiosRequestConfig,
  config2?: AxiosRequestConfig
): AxiosRequestConfig {
  if (!config2) {
    config2 = {};
  }

  const config = Object.create(null);   // result of merge

  for (let key in config2) {
    mergeField(key);
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key);
    }
  }

  function mergeField(key: string): void {
    const strat = strats[key] || defaultStrat;
    config[key] = strat(config1[key], config2![key]);
  }

  return config;
}