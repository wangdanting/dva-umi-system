import { parse } from 'qs';

/**
 * 获取url参数
 */
export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

/**
 *  手机号验证正则
 */
export const regMobile = /^1\d{10}/;
