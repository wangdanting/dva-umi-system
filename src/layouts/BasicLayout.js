import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import { getFlatMenuKeys } from '@/components/BaseMenu/SiderMenuUtils';
import Context from './MenuContext';
import Header from './Header';
import SiderMenu from './SiderMenu';
import styles from './BasicLayout.less';

const { Content } = Layout;

@connect(({ menu }) => ({
  menuData: menu.menuData,
  breadcrumbNameMap: menu.breadcrumbNameMap,
}))
class BasicLayout extends PureComponent {
  componentDidMount() {
    this.getMenuData();
  }

  getMenuData = () => {
    const {
      dispatch,
      route: { routes, path, authority },
    } = this.props;
    dispatch({
      type: 'menu/getMenuData',
      payload: { routes, path, authority },
    });
  };

  getContext() {
    const { location, breadcrumbNameMap } = this.props;
    return {
      location,
      breadcrumbNameMap,
    };
  }

  layout = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/logout',
    });
  };

  render() {
    const { children, menuData, location } = this.props;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    return (
      <Layout style={{ height: '100%' }}>
        <Header getMenuData={this.getMenuData} layout={this.layout} />
        <Layout>
          <SiderMenu menuData={menuData} location={location} flatMenuKeys={flatMenuKeys} />
          <Layout className={styles.content}>
            <Content>
              <Context.Provider value={this.getContext()}>{children}</Context.Provider>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
