/*
 * @Company: 嘉略信息
 * @Author: 李文华
 * @Date: 2019-06-15 08:54:30
 * @LastEditors: 李文华
 * @LastEditTime: 2019-07-21 14:59:55
 */
import React from 'react';
import { connect } from 'dva';
import { Tabs, ListView, List } from 'antd-mobile';

import ListViews from './components/ListViews';
import Lists from './components/Lists';
import { SectionHeader } from './components/SectionHeader';
import { SectionItem } from './components/SectionItem';
import { VisibleContext } from '../layouts/index';
import { tabsData, PAGE } from '../utils/constant';

let dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Main extends React.Component {
  static contextType = VisibleContext;

  constructor(props) {
    super(props);

    this.state = {
      myInitiatePage: PAGE,
      pendingPage: PAGE,
      myInitiateDataSource: dataSource,
      pendingDataSource: [],
      refresh: false,
      isLoading: true,
      tabKey: 0,
      height: document.documentElement.clientHeight,
    };
  }

  componentDidMount = () => {
    const {
      myInitiatePage,
      pendingPage,
      tabKey,
      myInitiateDataSource,
      pendingDataSource,
    } = this.state;

    this.fetchListViewData(
      myInitiatePage,
      'myInitiatePage',
      tabKey,
      'model/getMyInitiateListViewData',
      'myInitiateList',
      'myInitiateDataSource',
      myInitiateDataSource,
    );
    this.fetchListViewData(
      pendingPage,
      'pendingPage',
      1,
      'model/getPendingListViewData',
      'pendingList',
      'pendingDataSource',
      pendingDataSource,
    );
  };

  /**
   * @description: 获取列表中的数据
   * @param {type}
   * @return:
   */

  fetchListViewData = (page, pageStr, tabKey, type, dataListStr, dataSourceStr, dataSource) => {
    this.props
      .dispatch({
        type,
        payload: {
          tabKey,
          [pageStr]: page,
        },
      })
      .then(() => {
        tabKey === 0
          ? this.setState({
              isLoading: false,
              [pageStr]: page + 1,
              [dataSourceStr]: dataSource.cloneWithRows(this.props[dataListStr]),
            })
          : this.setState({
              isLoading: false,
              [pageStr]: page + 1,
              [dataSourceStr]: this.props[dataListStr],
            });
      });
  };
  /**
   * @description: 列表下拉刷新
   * @param {type}
   * @return:
   */
  handleRefresh = () => {
    console.log('下拉刷新');
  };

  /**
   * @description: 渲染行数据
   * @param {type}
   * @return:
   */
  renderRow = (rowData, sectionID, rowID) => {
    return (
      <div>
        <SectionHeader />
        {rowData.list.map((item, index) => (
          <SectionItem index={index} item={item} tabKey={rowData.tabKey} />
        ))}
      </div>
    );
  };

  /**
   * @description: 长列表上划加载数据
   * @param {type}
   * @return:
   */
  handleEndReched = () => {
    const {
      myInitiatePage,
      tabKey,
      pendingPage,
      myInitiateDataSource,
      pendingDataSource,
    } = this.state;
    this.setState(
      {
        isLoading: true,
      },
      () => {
        if (tabKey === 0) {
          this.fetchListViewData(
            myInitiatePage,
            'myInitiatePage',
            tabKey,
            'model/getMyInitiateListViewData',
            'myInitiateList',
            'myInitiateDataSource',
            myInitiateDataSource,
          );
        } else {
          this.fetchListViewData(
            pendingPage,
            'pendingPage',
            tabKey,
            'model/getPendingListViewData',
            'pendingList',
            'pendingDataSource',
            pendingDataSource,
          );
        }
      },
    );
  };

  /**
   * @description: 处理Tabs页切换问题
   * @param {type}
   * @return:
   */
  handleTabChange = (tab, index) => {
    this.setState({
      tabKey: index,
    });
  };

  render() {
    let value = this.context;
    const { height, isLoading, refresh, tabKey, myInitiateDataSource } = this.state;

    const props = {
      handleRefresh: this.handleRefresh,
      isLoading: isLoading,
      refresh: refresh,
      height: height,
      tabKey: tabKey,
    };

    return (
      <VisibleContext.Consumer>
        {value =>
          value && (
            <div style={{ height: height }}>
              <Tabs tabs={tabsData} swipeable={false} onChange={this.handleTabChange}>
                <ListViews
                  dataSource={myInitiateDataSource}
                  row={this.renderRow}
                  handleEndReched={this.handleEndReched}
                  {...props}
                />
                {/* <ListViews
                  dataSource={myInitiateDataSource}
                  row={this.renderRow}
                  handleEndReched={this.handleEndReched}
                  {...props}
                /> */}
                <Lists {...props} />
              </Tabs>
            </div>
          )
        }
      </VisibleContext.Consumer>
    );
  }
}
const mapStateToProps = state => {
  const { myInitiateList } = state.model;
  return {
    myInitiateList: myInitiateList,
  };
};

export default connect(mapStateToProps)(Main);
