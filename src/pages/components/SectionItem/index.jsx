import React from 'react';
import { Badge } from 'antd-mobile';

import styles from './index.less';

export class SectionItem extends React.Component {
  render() {
    const { index, item, tabKey } = this.props;
    return (
      <div
        className={styles.section_item}
        style={index % 2 === 0 ? { backgroundColor: '#f4f4f4' } : null}
      >
        <div className={styles.section_item_l}>
          {tabKey === 0 ? null : <div className={styles.item_avatar} />}
          <div className={styles.item_info}>
            <div className={styles.item_info_top}>
              <span className={styles.info_name}>{item.name}</span>
              <span className={styles.info_date}>{item.date}</span>
            </div>
            <div className={styles.item_info_remark}>{item.remark}</div>
          </div>
        </div>
        <div className={styles.section_item_r}>
          <Badge className={styles.badge} text="差旅费" />
          <span className={styles.money}>{item.money}</span>
        </div>
      </div>
    );
  }
}
