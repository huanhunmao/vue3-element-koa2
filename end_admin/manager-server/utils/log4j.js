// 封装 log4js

const log4js = require("log4js");

// 定义 levels 字典
const levals = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL,
};

//log4js 配置

log4js.configure({
  // 追加器
  appenders: {
    //名字可改
    console: {
      type: "console",
    },
  },
  categories: {
    default: {
      appenders: ["out", "app"],
      level: "debug",
    },
    error: {
      appenders: ["console"],
      level: "error",
    },
  },
});

/**
 * 日志输出,level 为debug
 * @param {string} content
 */

exports.debug = (content) => {
  let logger = log4js.getLogger();
  logger.level = levels.debug;
  logger.debug(content);
};

/**
 * 日志输出,level  为error
 * @param {string} content
 */

exports.debug = (content) => {
  let logger = log4js.getLogger();
  logger.level = levels.error;
  logger.error(content);
};

/**
 * 日志输出,level  为info
 * @param {string} content
 */

exports.debug = (content) => {
  let logger = log4js.getLogger();
  logger.level = levels.info;
  logger.info(content);
};
