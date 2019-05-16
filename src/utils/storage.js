/**
 * Web Storage API 的接口封装
 */

const session = {
  get(key) {
    const data = sessionStorage.getItem(key);
    return JSON.parse(data);
  },
  set(key, value) {
    const data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
};

const local = {
  get(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  },
  set(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default { session, local };
