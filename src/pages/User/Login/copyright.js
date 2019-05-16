import React from 'react';
import styles from './copyright.less';

const Copyright = () => (
  <div className={styles.container}>
    <div>
      <h2 className={styles.title}>umi + dva</h2>
      <p className={styles.subtitle}>基础管理平台</p>
    </div>
    <p className={styles.separate}>/</p>
    <p className={styles.en}>BASIC</p>
    <p className={styles.en}>MANAGEMENT</p>
    <p className={styles.en}>PLATFORM</p>
    <p className={styles.copyright}>© 2018 XXXXX网络科技有限公司</p>
  </div>
);

export default Copyright;
