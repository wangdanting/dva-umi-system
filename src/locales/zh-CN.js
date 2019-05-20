import login from './zh-CN/login';
import menu from './zh-CN/menu';
import orderSearch from './zh-CN/order-search';

export default {
  'navBar.lang': '语言',
  'navBar.title': '基础管理平台',
  'navBar.nav.partner': '合作伙伴',
  'navBar.nav.transaction': '交易',
  'navBar.nav.delivery': '配送',
  'navBar.nav.user-center': '用户中心',
  'navBar.change-password': '修改密码',
  'navBar.logout': '退出登录',
  'components.pagination': '总共 {total} 条',
  'exception.description.403': '抱歉，你无权访问该页面',
  'exception.description.404': '抱歉，你访问的页面不存在',
  'exception.description.500': '抱歉，服务器出错了',
  'exception.back': '返回首页',
  ...login,
  ...menu,
  ...orderSearch,
};
