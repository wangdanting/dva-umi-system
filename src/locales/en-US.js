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
  'components.pagination': 'Total {total} item',
  'exception.description.403': "Sorry, you don't have access to this page",
  'exception.description.404': 'Sorry, the page you visited does not exist',
  'exception.description.500': 'Sorry, the server is reporting an error',
  'exception.back': 'Submission Failed',
  'header.popconfirm': 'Are you sure logout?',
  'header.popconfirm.ok': 'Yes',
  'header.popconfirm.cancel': 'No',
  ...login,
  ...menu,
  ...orderSearch,
};
