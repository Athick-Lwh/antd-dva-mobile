import React from 'react';
import { Drawer, Tabs, Grid } from 'antd-mobile';
import { funcTabsData, travelGridData } from '../../utils/constant';

import styles from './index.less';

const sidebar = (
  <Tabs tabs={funcTabsData} swipeable={false}>
    <div className={styles.func_map}>
      {travelGridData.map((item, index) => (
        <div className={styles.travel_item}>
          <div className={styles.grid_title}>差旅工具</div>
          <Grid
            // renderItem={dataItem => (
            //   <div style={{ padding: '12.5px' }}>
            //     <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
            //       <span>I am title..</span>
            //     </div>
            //   </div>
            // )}
            data={travelGridData}
            columnNum={4}
            hasLine={false}
          />
        </div>
      ))}
    </div>
    <div className={styles.message}>消息界面</div>
    <div className={styles.setting}>系统设置界面</div>
  </Tabs>
);

class AllFunctions extends React.Component {
  render() {
    const { open, showDrawer } = this.props;
    return (
      <Drawer
        className={styles.my_drawer}
        sidebar={sidebar}
        open={open}
        onOpenChange={showDrawer}
        position="bottom"
        sidebarStyle={{ position: 'absolute', top: 88 }}
        overlayStyle={{ backgroundColor: '#fff', overflow: 'hidden' }}
      />
    );
  }
}

export default AllFunctions;
