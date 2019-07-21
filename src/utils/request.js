/*
 * @Company: 嘉略信息
 * @Author: 李文华
 * @Date: 2019-06-15 14:11:39
 * @LastEditors: 李文华
 * @LastEditTime: 2019-07-21 15:25:23
 */
import { Toast } from 'antd-mobile';
import { extend } from 'umi-request';

/**
 * 代码信息定义
 */
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  500: '服务器报错',
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
