import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import { getFlatMenuKeys } from '@/components/BaseMenu/SiderMenuUtils';
import Header from './Header';
import SiderMenu from './SiderMenu';

const { Content } = Layout;

@connect(({ menu }) => ({
  menuData: menu.menuData,
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

  render() {
    const { children, menuData, location } = this.props;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    return (
      <Layout>
        <Header getMenuData={this.getMenuData} />
        <Layout>
          <SiderMenu menuData={menuData} location={location} flatMenuKeys={flatMenuKeys} />
          <Layout>
            <Content>{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
