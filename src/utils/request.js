import { extend } from 'umi-request';
import { notification } from 'antd';
import router from 'umi/router';

const errorMsg = '网络请求超时，请重新登录!';

/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response = {}, data = {} } = error;
  const { status, url } = response;
  const errortext = data.message || errorMsg;

  if (status === 400) {
    const { code } = data;
    if ([10002, 10019, 10020].includes(code)) {
      notification.error({
        message: '未登录或登录已过期，请重新登录。',
      });
      // @HACK
      /* eslint-disable no-underscore-dangle */
      window.g_app._store.dispatch({
        type: 'login/logout',
      });
      return;
    }
  }
  notification.error({
    message: `请求错误 ${status}: ${url}`,
    description: errortext,
  });
  // environment should not be used
  if (status === 403) {
    router.push('/exception/403');
    return;
  }
  if (status <= 504 && status >= 500) {
    router.push('/exception/500');
    return;
  }
  if (status >= 404 && status < 422) {
    router.push('/exception/404');
  }
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

export default request;
