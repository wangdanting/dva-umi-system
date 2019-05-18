import React from 'react';
import { FormattedMessage } from 'umi-plugin-react/locale';
import styles from './copyright.less';

const Copyright = () => (
  <div className={styles.container}>
    <div>
      <h2 className={styles.title}>umi + dva</h2>
      {/* 基础管理平台 */}
      <p className={styles.subtitle}>
        <FormattedMessage id="login.title" />
      </p>
    </div>
    <p className={styles.separate}>/</p>
    <p className={styles.en}>BASIC</p>
    <p className={styles.en}>MANAGEMENT</p>
    <p className={styles.en}>PLATFORM</p>
    {/* © 2018 XXXXX网络科技有限公司 */}
    <p className={styles.copyright}>
      <FormattedMessage id="login.copyright" />
    </p>
  </div>
);

export default Copyright;
