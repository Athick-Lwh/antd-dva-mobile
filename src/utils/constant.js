/*
 * @Company: 嘉略信息
 * @Author: 李文华
 * @Date: 2019-06-15 09:01:58
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-26 08:52:42
 */
import { Badge } from 'antd-mobile';
// import icon1 from '../public/img/jizhang.svg';

const NUMBER_ROWS = 10; //ListView组件行数
let PAGE = 1;

const tabsData = [
  {
    title: (
      <Badge text={8} style={{ backgroundColor: '#FF3B30' }}>
        我发起的
      </Badge>
    ),
  },
  {
    title: (
      <Badge text={99} style={{ backgroundColor: '#FF3B30' }}>
        待审批
      </Badge>
    ),
  },
];
const funcTabsData = [{ title: '功能地图' }, { title: '消息' }, { title: '系统设置' }];
const travelGridData = [
  {
    icon: {
      /* icon1 */
    },
    text: '记账',
  },
  { icon: '/public/img/jizhang.svg', text: '出差申请' },
  { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '出差申请' },
  { icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', text: '出差申请' },
];

const LIST_ARRAY = [
  {
    name: '测试1',
    date: '2018/10/24',
    remark: '拜访青岛、潍坊两地客户，并出席相关会议',
    money: '782.65',
  },
  {
    name: '测试2',
    date: '2018/10/24',
    remark: '拜访青岛、潍坊两地客户，并出席相关会议',
    money: '782.65',
  },
  {
    name: '测试3',
    date: '2018/10/24',
    remark: '拜访青岛、潍坊两地客户，并出席相关会议',
    money: '782.65',
  },
  {
    name: '测试4',
    date: '2018/10/24',
    remark: '拜访青岛、潍坊两地客户，并出席相关会议',
    money: '782.65',
  },
];

export { tabsData, funcTabsData, travelGridData, NUMBER_ROWS, PAGE, LIST_ARRAY };
