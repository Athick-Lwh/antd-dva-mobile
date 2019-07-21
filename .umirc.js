/*
 * @Date: 2019-06-15 08:54:30
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-25 18:08:55
 */
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  exportStatic: {},
  history: 'hash',
  runtimePublicPath: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'antd+dva-mobile',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
