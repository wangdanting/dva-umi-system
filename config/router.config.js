// https://umijs.org/zh/guide/router.html
export default [
  {
    path: '/user',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { component: '404' },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/delivery/order-search' },
      {
        path: '/delivery',
        name: 'delivery',
        icon: 'dashboard',
        routes: [
          {
            path: '/delivery/order-search',
            name: 'orderSearch',
            component: './Delivery/Order/OrderSearch',
          },
          {
            path: '/delivery/order-detail',
            name: 'orderDetail',
            component: './Delivery/Order/OrderDetail',
          },
        ],
      },
      {
        path: '/form',
        name: 'form',
        authority: ['delivery', 'transaction'],
        icon: 'dashboard',
        routes: [
          {
            path: '/form/courier-form',
            name: 'courierForm',
            component: './Delivery/Form',
          },
        ],
      },
      {
        path: '/exception',
        name: 'exception',
        icon: 'warning',
        authority: ['partner', 'userCenter'],
        routes: [
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
        ],
      },
      { component: '404' },
    ],
  },
];
