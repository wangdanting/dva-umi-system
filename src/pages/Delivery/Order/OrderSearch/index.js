import React, { PureComponent } from 'react';
import { Card, Form, Col, Row, DatePicker, Radio } from 'antd';
import moment from 'moment';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Result from './Result';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const todayRange = [
  moment(new Date('2019-03-01'), dateFormat),
  moment(new Date('2019-05-01'), dateFormat),
]; // 时间范围搜索框的默认值

@connect(({ orderSearch }) => ({
  queryData: orderSearch.queryData,
  data: orderSearch.data,
  dataTotal: orderSearch.dataTotal,
}))
@Form.create()
class OrderSearch extends PureComponent {
  componentDidMount() {
    this.handleSearch();
  }

  /**
   * 查询
   */
  handleSearch = obj => {
    const { queryData: prevObj, dispatch } = this.props;
    const queryData = obj || prevObj;
    if (obj) {
      dispatch({
        type: 'orderSearch/save',
        payload: { obj },
      });
    }
    dispatch({
      type: 'orderSearch/handleSearch',
      payload: queryData,
    });
  };

  /**
   * 更新查询状态
   */
  changeStatus = obj => {
    const { queryData: prevObj } = this.props;
    const queryData = Object.assign({}, prevObj, obj, { page: 0, size: 10 });
    this.handleSearch(queryData);
  };

  /**
   *处理查询状态改变
   * handle status query change
   */
  handleChange = (e, key) => {
    const obj = {};
    switch (key) {
      case 'status':
      case 'orderWay':
        obj[key] = e.target.value;
        break;
      case 'range':
        obj.expectFetchCurrentStart = moment(e[0])
          .startOf('day')
          .valueOf();
        obj.expectFetchCurrentEnd = moment(e[1])
          .endOf('day')
          .valueOf();
        break;
      default:
    }

    this.changeStatus(obj);
  };

  /**
   * 分页改变
   */
  changePagination = (current, pageSize) => {
    const { queryData: prevObj } = this.props;
    const queryData = Object.assign({}, prevObj, { page: current - 1, size: pageSize });
    this.handleSearch(queryData);
  };

  render() {
    const {
      data,
      dataTotal,
      queryData: { page, size },
    } = this.props;
    return (
      <PageHeaderWrapper title="订单查询">
        <Card bordered={false}>
          <Form layout="inline">
            <Row>
              <Col>
                <FormItem label="订单状态">
                  <RadioGroup defaultValue="all" onChange={e => this.handleChange(e, 'status')}>
                    <Radio value="all">全部</Radio>
                    <Radio value="wait_send">待配送</Radio>
                    <Radio value="sending">配送中</Radio>
                    <Radio value="arrived">已送达</Radio>
                    <Radio value="cancelled">已取消</Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col>
                <FormItem label="订单类型">
                  <RadioGroup defaultValue="all" onChange={e => this.handleChange(e, 'orderWay')}>
                    <Radio value="all">全部</Radio>
                    <Radio value="general">普通下单</Radio>
                    <Radio value="fast">一键下单</Radio>
                    <Radio value="proxy">跑腿代购</Radio>
                  </RadioGroup>
                </FormItem>
              </Col>
              <Col>
                <FormItem label="日期">
                  <RangePicker
                    style={{ width: 250 }}
                    defaultValue={todayRange}
                    format={dateFormat}
                    allowClear={false}
                    onChange={e => this.handleChange(e, 'range')}
                  />
                </FormItem>
              </Col>
            </Row>
          </Form>
          <Result
            data={data}
            dataTotal={dataTotal}
            current={page}
            pageSize={size}
            handleChange={this.changePagination}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default OrderSearch;
