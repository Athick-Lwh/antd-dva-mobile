import { Toast } from 'antd-mobile';
import { extend } from 'umi-request';

/**
 * 代码信息定义
 */
const codeMessage = {
  200: '服务器成功返回请求的数据。',
};

/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response = {} } = error;
  const errorText = codeMessage[response.status] || response.statusText;
  const { status } = response;
  Toast.fail(`请求错误${status}:${errorText}`);
};

/**
 * 配置Request请求时的默认参数
 */
const request = extend({
  errorHandler,
});

export default request;
