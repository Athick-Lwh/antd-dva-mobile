import React from 'react';
import router from 'umi/router';
import { PullToRefresh, Button } from 'antd-mobile';

import styles from './index.less';

class EmptyPage extends React.Component {
  render() {
    const { height, tabKey, refresh, handleRefresh } = this.props;
    return (
      <PullToRefresh refreshing={refresh} onRefresh={handleRefresh}>
        <div className={styles.empty_page} style={{ height: height }}>
          <div className={styles.prompt_svg} />
          {tabKey === 1 ? (
            <>
              <div className={styles.prompt}>没有需要处理的审批</div>
              <Button onClick={() => router.push('../../PendingHistory')}>查看审批历史记录</Button>
            </>
          ) : (
            <div className={styles.prompt}>没有可以展示的信息</div>
          )}
        </div>
      </PullToRefresh>
    );
  }
}

export default EmptyPage;
