import login from '@/services/login';
import Storage from '@/utils/storage';
import { getPageQuery } from '@/utils/utils';
import { routerRedux } from 'dva/router';
import { stringify } from 'qs';

export default {
  namespace: 'login',
  state: {
    loading: false, // 设置按钮载入状态
  },
  effects: {
    *login({ payload }, { call, put }) {
      yield put({
        type: 'setState',
        payload: {
          loading: true,
        },
      });
      const { result } = yield call(login, payload);
      // login successfully
      if (result) {
        Storage.session.set('Authorization', result);
        // 处理跳转页面
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const urlParams = new URL(window.location.href);
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            redirect = null;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *logout(_, { put }) {
      const { redirect } = getPageQuery();
      // redirect
      if (window.location.pathname !== '/user/login' && !redirect) {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          })
        );
      }
    },
  },
  reducers: {
    setState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
