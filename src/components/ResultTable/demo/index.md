## 含有分页的table页。

![含有分页的table页图片示例](../../../excludeFile/result-table.png)

````jsx
import ResultTable from '@/component/ResultTable';

const columns = [
  {
    title: '活动名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '活动生效时间',
    dataIndex: 'time',
    key: 'time',
    render: (text, record) => {
      return (
        <Row>
          <Col>{record.startDatetime}</Col>
          <Col>{record.endDatetime}</Col>
        </Row>
      );
    }
  }
];

state = {
  data: [],
  dataTotal: 0,
  queryData: {
    status: '',
    page: 0,
    size: 10
  }
}

/**
  * 分页改变
*/
changePagination = (current, pageSize) => {
  const { queryData: prevObj } = this.state;
  const queryData = Object.assign({}, prevObj, { page: current - 1, size: pageSize });
  this.handleSearch(queryData);
  this.setState({
    queryData
  });
};

ReactDOM.render(
  <ResultTable
    data={data}
    dataTotal={dataTotal}
    current={page}
    pageSize={size}
    columns={this.columns}
    keyStr='miaoshaConfigId'
    handleChange={this.changePagination}
  />
, mountNode);
````
