/*
 * @Company: 嘉略信息
 * @Author: 李文华
 * @Date: 2019_06_21 08:35:43
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-26 09:04:58
 */
import React from 'react';
import { List } from 'antd-mobile';

import { SectionItem } from '../../components/SectionItem';
import { LIST_ARRAY } from '../../../utils/constant';

class PendingHistory extends React.Component {
  render() {
    return (
      <div>
        <List>
          {LIST_ARRAY.map((item, index) => (
            <SectionItem item={item} index={index} />
          ))}
        </List>
      </div>
    );
  }
}

export default PendingHistory;
