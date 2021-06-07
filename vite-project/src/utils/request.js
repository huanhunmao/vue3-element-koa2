// 二次封装 axios

import axios from "axios";
import router from "../router";
import config from "./../config";

import { ElMessage } from "element-plus";

const TOKEN_INVALID = "Token过期，请重新登陆";
const NETWORL_ERROR = "网络异常，请稍后重试";

// 创建axios 实例  添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 15000,
});

// 添加 请求 request 拦截

service.interceptors.request.use((req) => {
  const headers = req.headers;
  if (!headers.Authorization) {
    headers.Authorization = "fhj";
    return req;
  }
});

// 响应  response 拦截
// 返回值 返回报错 返回状态码 ...
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data;
  // debugger;
  if (code == 200) {
    return data;
  } else if (code == 40001) {
    // 这个表示 token 失效情况
    // 报错 使用 element-plus 的报错 格式
    // 自定义报错信息
    ElMessage.err(TOKEN_INVALID);
    // 报错之后 缓和 1.5s 后跳转登陆页面
    setTimeout(() => {
      router.push("/login");
    }, 15000);
    return Promise.reject(TOKEN_INVALID); //  错误输出到控制台
  } else {
    // 这种就是 单纯报错了 抛出错误
    ElMessage.error(msg || NETWORL_ERROR);
    return Promise.reject(msg || NETWORL_ERROR); //  错误输出到控制台
  }
});

// 请求核心函数
// 区分 get / post

function request(options) {
  options.method = options.method || "get"; // 默认给个 get请求
  if (options.method.toLowerCase() === "get") {
    //get请求
    options.params = options.data;
  }

  // 判断环境  确保 生产环境使用线上baseApi 而不使用 mockApi
  if (config.env === "prod") {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = config.mockApi ? config.mockApi : config.baseApi;
  }

  return service(options);
}

["get", "post", "put", "delete", "patch"].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    });
  };
});

export default request;
