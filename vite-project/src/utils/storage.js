// storage 二次封装

import config from "../config";

export default {
  setItem(key, val) {
    let storage = this.getStorage();
    storage[key] = val;
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },
  getItem() {
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
  },
  //清除 某一项
  clearItem(key) {
    let storage = this.getStorage();
    delete storage[key];
  },
  // 清除 所有
  clearAll() {
    // 直接调用系统 api
    window.localStorage.clear();
  },
};
