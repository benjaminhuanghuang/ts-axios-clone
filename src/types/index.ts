export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType; // 响应数据类型
  timeout?: number
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  cancelToken?: CancelToken;
  withCredentials?: boolean;

  xsrfCookieName?: string;
  xsrfHeaderName?: string;

  onDownloadProgress?: (e: ProgressEvent) => void; // 下载进度监控
  onUploadProgress?: (e: ProgressEvent) => void; // 上传进度监控

  auth?: AxiosBasicCredentials; // HTTP 授权
  validateStatus?: (status: number) => boolean; // 自定义合法状态码
  paramsSerializer?: (params: any) => string; // 自定义参数序列化
  baseURL?: string;
  
  [propName: string]: any  // for merge 
}

// AxiosResponse 支持范型 data
export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any; 
  config: AxiosRequestConfig;
  request: any;
} 

// AxiosPromise 支持范型
export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  config: AxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: AxiosResponse;
  isAxiosError: boolean;
}

// HTTP methods
export interface Axios {
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };


  // requst 时指定data类型T
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

  getUri(config?: AxiosRequestConfig): string;
}
// 混合类型，有Methods and properties, 函数重载和范型
export interface AxiosInstance extends Axios {
  // <T = any> 函数的范型参数
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>;

  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}

export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance;

  CancelToken: CancelTokenStatic;
  Cancel: CancelStatic;
  isCancel: (value: any) => boolean;
  // generic method all<T>
  // Parameter is Array, type is T or Promise<T>
  // return Promise<Array>
  all<T>(promises: Array<T | Promise<T>>): Promise<T[]>;
  // generic method spread<T, R>
  // Parameter callback is a function, parameter of this function is T[], return a R type
  // return a function, parameter of this function is T[], return a R type
  spread<T, R>(callback: (...args: T[]) => R): (arr: T[]) => R;

  Axios: AxiosClassStatic;
}

export interface AxiosClassStatic {
  new (config: AxiosRequestConfig): Axios;
}

/* -------------------------------------------
  Interceptor
-------------------------------------------*/
export interface AxiosInterceptorManager<T> {
  // Add interceptor, return interceptor id
  use(resolve: ResolveFn<T>, rejected?: RejectedFn): number;

  eject(id: number): void;
}

export interface ResolveFn<T> {
  // return T for sync, return Promise<T> for async
  (val: T): T | Promise<T>;
}

export interface RejectedFn {
  (error: any): any;
}

export interface AxiosTransformer {
  (data: any, headers?: any): any;
}

 /* -------------------------------------------
  Cancel
-------------------------------------------*/
export interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;

  throwIfRequested(): void;
}

export interface Canceler {
  (message?: string): void;
}

export interface CancelExecutor {
  (cancel: Canceler): void;
}

export interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}

export interface CancelTokenStatic {
  new (executor: CancelExecutor): CancelToken;

  source(): CancelTokenSource;
}

export interface Cancel {
  message?: string;
}

export interface CancelStatic {
  new (message?: string): Cancel;
}

export interface AxiosBasicCredentials {
  username: string;
  password: string;
}