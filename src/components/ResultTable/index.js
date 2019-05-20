import React, { PureComponent } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'umi-plugin-react/locale';
import styles from './index.less';

class ResultTable extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.any), // 表单数据
    dataTotal: PropTypes.number, // 数据总数
    current: PropTypes.number, // 当前页数
    pageSize: PropTypes.number, // 每页条数
    columns: PropTypes.arrayOf(PropTypes.any), // 表格列的配置描述
    width: PropTypes.string, // 表哥的宽
    keyStr: PropTypes.string.isRequired, // 表格行 key 的取值
    bordered: PropTypes.bool, // 是否有边框
    showHeader: PropTypes.bool, // 是否显示表头
    size: PropTypes.oneOf(['default', 'middle', 'small']), // 表格大小
    handleChange: PropTypes.func, // 页码改变的回调和pageSize 变化的回调
    rowSelection: PropTypes.objectOf(PropTypes.any), // 批量操作
  };

  static defaultProps = {
    data: [],
    dataTotal: 0,
    current: 0,
    pageSize: 10,
    columns: [],
    width: '100%',
    bordered: true,
    showHeader: true,
    size: 'small',
    rowSelection: null,
    handleChange: () => {},
  };

  onChange = (current, pageSize) => {
    const { handleChange } = this.props;
    handleChange(current, pageSize);
  };

  onShowSizeChange = (current, pageSize) => {
    const { handleChange } = this.props;
    handleChange(current, pageSize);
  };

  render() {
    const {
      data,
      dataTotal,
      pageSize,
      columns,
      keyStr,
      width,
      current,
      bordered,
      showHeader,
      size,
      className,
      rowSelection,
    } = this.props;
    const pagination = {
      position: 'bottom',
      showSizeChanger: true,
      showQuickJumper: true,
      total: dataTotal,
      current: current + 1,
      pageSize,
      showTotal: total => <FormattedMessage id="components.pagination" values={{ total }} />,
      onChange: this.onChange,
      onShowSizeChange: this.onShowSizeChange,
    };
    const cls = classNames(styles.resultTable, className);
    return (
      <div className={cls}>
        <Table
          rowKey={record => record[keyStr]}
          columns={columns}
          dataSource={data}
          bordered={bordered}
          showHeader={showHeader}
          pagination={pagination}
          size={size}
          style={{ minWidth: width }}
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

export default ResultTable;
