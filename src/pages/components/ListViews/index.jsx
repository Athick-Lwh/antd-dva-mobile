/*
 * @Date: 2019-06-15 09:04:55
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-25 17:15:28
 */
import React from 'react';
import { ListView, PullToRefresh } from 'antd-mobile';

import EmptyPage from '../EmptyPage';

class ListViews extends React.Component {
  render() {
    const {
      dataSource,
      height,
      refresh,
      isLoading,
      row,
      handleEndReched,
      handleRefresh,
      tabKey,
    } = this.props;

    return dataSource === 'undefined' ? (
      <EmptyPage height={height} tabKey={tabKey} refresh={refresh} handleRefresh={handleRefresh} />
    ) : (
      <ListView
        renderFooter={() => (
          <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
            {isLoading ? 'Loading...' : 'Loaded'}
          </div>
        )}
        style={{ height: height }}
        dataSource={dataSource}
        renderRow={row}
        onEndReachedThreshold={10}
        onEndReached={handleEndReched}
        pullToRefresh={<PullToRefresh refreshing={refresh} onRefresh={handleRefresh} />}
      />
    );
  }
}
export default ListViews;
