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
        ],
      },
      { component: '404' },
    ],
  },
];
