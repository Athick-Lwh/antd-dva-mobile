/*
 * @Date: 2019-06-15 09:05:52
 * @LastEditors: 李文华
 * @LastEditTime: 2019-06-25 14:38:20
 */
import React from 'react';
import HeaderBar from '../components/HeaderBar';

class BasicLayout extends React.Component {
  state = {
    drawerOpen: false,
    normalVisible: true,
  };

  showDrawer = () => {
    const { drawerOpen, normalVisible } = this.state;
    this.setState({
      drawerOpen: !drawerOpen,
      normalVisible: !normalVisible,
    });
  };

  render() {
    const { drawerOpen, normalVisible } = this.state;
    const { location, children } = this.props;
    if (location.pathname === '/') {
      return (
        <div className="layout">
          <HeaderBar drawerOpen={drawerOpen} showDrawer={this.showDrawer} />
          <VisibleContext.Provider value={normalVisible}>{children}</VisibleContext.Provider>
        </div>
      );
    } else {
      return <div>{children}</div>;
    }
  }
}

// context的用法
export const VisibleContext = React.createContext(true);
export default BasicLayout;
