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
  ...login,
  ...menu,
  ...orderSearch,
};
