
<h1 align="center">umi + dva 管理系统基础框架</h1>

<div align="center">已实现基础配置，可直接使用的基础管理系统模版框架</div>

<div align="center">

<p float="left">

<img src="./src/assets/images/login-china.jpg" width="400px">

<img src="./src/assets/images/page-china.jpg" width="400px">

</p>

</div>

## 技术栈

- 使用框架：[react](https://reactjs.org/)、[umi](https://umijs.org/zh/)、[dva](https://dvajs.com/)、[antd](https://ant.design/index-cn)
- 使用请求：[umi-request](https://github.com/umijs/umi-request/blob/master/README_zh-CN.md)
- 类型检查：[prop-types](https://www.npmjs.com/package/prop-types)
- 搭建环境：[eslint](https://eslint.org/)、[prettier](https://prettier.io/)、[stylelint](https://stylelint.io/)、[husky](https://www.npmjs.com/package/husky)、[lint-staged](https://www.npmjs.com/package/lint-staged)

## 特性

- **最新技术栈**：使用 React/umi/dva/antd 等前端前沿技术开发
- **国际化**： 内建业界通用的国际化方案 案例支持 中文/英文

## 简单的路由配置

[使用配置式路由 ](https://umijs.org/zh/guide/router.html)

```javascript
[
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
    ],
  },
];
```