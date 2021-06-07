// 环境 配置 封装

// 默认值   dev/ prod /test
const env = import.meta.env.MODE || "prod";

// 三种环境下配置
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/95a7e0b2c84602ea1fa0c4cc9ea4d096/api",
  },
  test: {
    baseApi: "//test.futurefe.com/api",
    mockApi:
      "https://www.fastmock.site/mock/95a7e0b2c84602ea1fa0c4cc9ea4d096/api",
  },
  prod: {
    baseApi: "//future.com/api",
    mockApi: "",
  },
};

export default {
  env,
  namespace: "massage",
  mock: true, // 是否使用 mock数据
  ...EnvConfig[env], // 解构出来
};
