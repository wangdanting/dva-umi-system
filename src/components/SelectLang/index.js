import React, { PureComponent } from 'react';
import { Dropdown, Menu, Icon } from 'antd';
import { setLocale, getLocale, FormattedMessage } from 'umi-plugin-react/locale';
import styles from './index.less';

class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    setLocale(key);
  };

  render() {
    const selectedLang = getLocale();
    const locales = ['zh-CN', 'en-US'];
    const languageLabels = {
      'zh-CN': '简体中文',
      'en-US': 'English',
    };
    const languageIcons = {
      'zh-CN': '🇨🇳',
      'en-US': '🇬🇧',
    };
    const langMenu = (
      <Menu selectedKeys={[selectedLang]} onClick={this.changeLang}>
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]} className={styles.icon}>
              {languageIcons[locale]}
            </span>
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <Dropdown overlay={langMenu} className={styles.container}>
        <span>
          <Icon type="global" className={styles.icon} />
          {/* format 语言 */}
          <FormattedMessage id="navBar.lang" />
        </span>
      </Dropdown>
    );
  }
}

export default SelectLang;
