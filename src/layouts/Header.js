import React, { PureComponent } from 'react';
import { Layout, Button, Icon, Popconfirm } from 'antd';
import SelectLang from '@/components/SelectLang';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import { FormattedMessage } from 'umi-plugin-react/locale';
import classNames from 'classnames';
import styles from './Header.less';

const { Header } = Layout;

class HeaderDom extends PureComponent {
  state = {
    activeBtn: 'delivery',
  };

  changeAuthorized = currentAuthority => {
    setAuthority(currentAuthority);
    reloadAuthorized();
    this.setState({
      activeBtn: currentAuthority,
    });
    const { getMenuData } = this.props;
    getMenuData();
  };

  render() {
    const { activeBtn } = this.state;
    return (
      <Header className={styles.container}>
        <h1 className={styles.title}>dva+umi</h1>
        <h2 className={styles.subtitle}>
          {/* 基础管理平台 */}
          <FormattedMessage id="navBar.title" />
        </h2>
        <div className={styles.menu}>
          <Button
            type="primary"
            icon="car"
            className={classNames(styles.btn, { [styles.activeBtn]: activeBtn === 'delivery' })}
            onClick={() => this.changeAuthorized('delivery')}
          >
            {/* 配送 */}
            <FormattedMessage id="navBar.nav.delivery" />
          </Button>
          <Button
            type="primary"
            icon="team"
            className={classNames(styles.btn, { [styles.activeBtn]: activeBtn === 'partner' })}
            onClick={() => this.changeAuthorized('partner')}
          >
            {/* 合作伙伴 */}
            <FormattedMessage id="navBar.nav.partner" />
          </Button>
          <Button
            type="primary"
            icon="money-collect"
            className={classNames(styles.btn, { [styles.activeBtn]: activeBtn === 'transaction' })}
            onClick={() => this.changeAuthorized('transaction')}
          >
            {/* 交易 */}
            <FormattedMessage id="navBar.nav.transaction" />
          </Button>
          <Button
            type="primary"
            icon="user"
            className={classNames(styles.btn, { [styles.activeBtn]: activeBtn === 'userCenter' })}
            onClick={() => this.changeAuthorized('userCenter')}
          >
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
  }
}

export default HeaderDom;
