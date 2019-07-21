/*
 * @Date: 2019-06-15 09:06:10
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-26 09:08:40
 */
import React from 'react';
import router from 'umi/router';
import { TabBar } from 'antd-mobile';

import AllFunctions from '../AllFunctions';
import styles from './index.less';

const Item = TabBar.Item;

class HeaderBar extends React.Component {
  state = {
    normalVisible: true,
  };
  //下拉刷新调用函数
  handleRefresh = () => {
    console.log('下拉刷新');
  };

  render() {
    const { drawerOpen, showDrawer } = this.props;
    return (
      <div>
        <TabBar barTintColor="#4f77aa" unselectedTintColor="#fff" tabBarPosition="top">
          <Item
            key="quickAccount"
            title="快速记账"
            icon={<div className={styles.header_bar_quick} />}
            onPress={() => router.push()}
          />
          <Item
            key="newReimburse"
            title="新建报销"
            icon={<div className={styles.header_bar_reim} />}
            onPress={() => router.push()}
          />
          <Item
            key="newApplication"
            title="新建申请"
            icon={<div className={styles.header_bar_appli} />}
            onPress={() => router.push()}
          />
          <Item
            key="allFunctions"
            title="全部功能"
            icon={<div className={styles.header_bar_all} />}
            onPress={showDrawer}
          />
        </TabBar>
        <AllFunctions open={drawerOpen} showDrawer={showDrawer} />
      </div>
    );
  }
}
export default HeaderBar;
