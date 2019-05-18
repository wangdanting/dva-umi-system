import React from 'react';
import { Layout, Button, Icon, Popconfirm } from 'antd';
import SelectLang from '@/components/SelectLang';
import { FormattedMessage } from 'umi-plugin-react/locale';
import styles from './Header.less';

const { Header } = Layout;

const HeaderDom = () => (
  <Header className={styles.container}>
    <h1 className={styles.title}>dva+umi</h1>
    <h2 className={styles.subtitle}>
      {/* 基础管理平台 */}
      <FormattedMessage id="navBar.title" />
    </h2>
    <div className={styles.menu}>
      <Button type="link" icon="team" className={styles.btn} ghost>
        {/* 合作伙伴 */}
        <FormattedMessage id="navBar.nav.partner" />
      </Button>
      <Button type="link" icon="money-collect" className={styles.btn} ghost>
        {/* 交易 */}
        <FormattedMessage id="navBar.nav.transaction" />
      </Button>
      <Button type="link" icon="car" className={styles.btn} ghost>
        {/* 配送 */}
        <FormattedMessage id="navBar.nav.delivery" />
      </Button>
      <Button type="link" icon="user" className={styles.btn} ghost>
        {/* 用户中心 */}
        <FormattedMessage id="navBar.nav.user-center" />
      </Button>
    </div>
    <div className={styles.userInfo}>
      <span>王丹婷</span>
      <span>
        <SelectLang />
      </span>
      <span>
        {/* 修改密码 */}
        <FormattedMessage id="navBar.change-password" />
      </span>
      <span>
        <Popconfirm
          placement="bottomRight"
          title="您确定要退出登录?"
          okText="确定"
          cancelText="取消"
        >
          <Icon type="logout" className={styles.icon} />
          <span>
            {/* 退出 */}
            <FormattedMessage id="navBar.logout" />
          </span>
        </Popconfirm>
      </span>
    </div>
  </Header>
);

export default HeaderDom;
