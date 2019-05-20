import login from './en-US/login';
import menu from './en-US/menu';
import orderSearch from './en-US/order-search';

export default {
  'navBar.lang': 'Languages',
  'navBar.title': 'Manage Platform',
  'navBar.nav.partner': 'Partner',
  'navBar.nav.transaction': 'Transaction',
  'navBar.nav.delivery': 'Delivery',
  'navBar.nav.user-center': 'User Center',
  'navBar.change-password': 'Password',
  'navBar.logout': 'Logout',
  ...login,
  ...menu,
  ...orderSearch,
};
