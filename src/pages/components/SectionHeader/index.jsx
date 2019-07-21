import React from 'react';

import styles from './index.less';
export class SectionHeader extends React.Component {
  render() {
    return (
      <div className={styles.section_header}>
        <div className={styles.section_header_l}>审批中</div>
        <div className={styles.section_header_r}>合计：6568.50</div>
      </div>
    );
  }
}
