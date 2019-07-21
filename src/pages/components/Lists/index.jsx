/*
 * @Company: 嘉略信息
 * @Author: 李文华
 * @Date: 2019_06_20 13:54:01
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-26 09:09:11
 */

import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { List, Button, PullToRefresh } from 'antd-mobile';

import { SectionItem } from '../SectionItem';
import { LIST_ARRAY } from '../../../utils/constant';

import styles from './index.less';
import EmptyPage from '../EmptyPage';

class Lists extends React.Component {
  render() {
    const { pendingList, height, tabKey, refresh, handleRefresh } = this.props;
    return LIST_ARRAY.length === 0 ? (
      <EmptyPage tabKey={tabKey} height={height} refresh={refresh} handleRefresh={handleRefresh} />
    ) : (
      <PullToRefresh>
        <List
          style={{ height: height }}
          renderFooter={
            <Button
              className={styles.pending_btn}
              onClick={() => router.push('../../Other/PendingHistory')}
            >
              查看审批历史记录
            </Button>
          }
        >
          {LIST_ARRAY.map((item, index) => (
            <SectionItem item={item} index={index} />
          ))}
        </List>
        )
      </PullToRefresh>
    );
  }
}
const mapStateToProps = state => {
  const { pendingList } = state.model;
  return {
    pendingList: pendingList,
  };
};
export default connect(mapStateToProps)(Lists);
