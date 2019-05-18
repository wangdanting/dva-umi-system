import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Header from './Header';
import SiderMenu from './SiderMenu';

const { Content } = Layout;

const BasicLayout = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <SiderMenu />
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
    {children}
  </Layout>
);

BasicLayout.propTypes = {
  children: PropTypes.node,
};

BasicLayout.defaultProps = {
  children: null,
};

export default BasicLayout;
