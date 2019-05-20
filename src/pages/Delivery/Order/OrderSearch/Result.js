import React from 'react';
import Link from 'umi/link';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import ResultTable from '@/components/ResultTable';

const columns = [
  {
    // 订单号
    title: formatMessage({ id: 'orderSearch.table.expressOrderId' }),
    dataIndex: 'expressOrderId',
    key: 'expressOrderId',
  },
  {
    // 订单类型
    title: formatMessage({ id: 'orderSearch.table.orderWayName' }),
    dataIndex: 'orderWayName',
    key: 'orderWayName',
  },
  {
    // 配送站
    title: formatMessage({ id: 'orderSearch.table.merchName' }),
    dataIndex: 'merchName',
    key: 'merchName',
  },
  {
    // 发货信息
    title: formatMessage({ id: 'orderSearch.table.deliveryFromDesc' }),
    dataIndex: 'deliveryFromDesc',
    key: 'deliveryFromDesc',
    render: (text, record) => {
      return (
        <>
          {record.orderWay === 'jbg-proxy' && <p>{record.orderWayName}</p>}
          <p>{record.shopName}</p>
          <p>{record.fromMobile || ''}</p>
        </>
      );
    },
  },
  {
    // 收货信息
    title: formatMessage({ id: 'orderSearch.table.deliveryDestDesc' }),
    dataIndex: 'deliveryDestDesc',
    key: 'deliveryDestDesc',
    render: (text, record) => {
      return (
        <>
          <p>{record.destName}</p>
          <p>{record.destMobile || ''}</p>
        </>
      );
    },
  },
  {
    // 配送员
    title: formatMessage({ id: 'orderSearch.table.courier' }),
    dataIndex: 'courier',
    key: 'courier',
    render: (text, record) => {
      return (
        <>
          <p>{record.courierName}</p>
          <p>{record.courierMobile || ''}</p>
        </>
      );
    },
  },
  {
    // 订单支付时间
    title: formatMessage({ id: 'orderSearch.table.paidTimeFormat' }),
    dataIndex: 'paidTimeFormat',
    key: 'paidTimeFormat',
  },
  {
    // 配送费
    title: formatMessage({ id: 'orderSearch.table.deliveryFee' }),
    dataIndex: 'deliveryFee',
    key: 'deliveryFee',
    render: text => {
      return `${text}元`;
    },
  },
  {
    // 配送类型
    title: formatMessage({ id: 'orderSearch.table.orderTypeName' }),
    dataIndex: 'orderTypeName',
    key: 'orderTypeName',
  },
  {
    // 状态
    title: formatMessage({ id: 'orderSearch.table.statusName' }),
    dataIndex: 'statusName',
    key: 'statusName',
  },
  {
    // 操作
    title: formatMessage({ id: 'orderSearch.table.operate' }),
    dataIndex: 'operate',
    key: 'operate',
    width: 85,
    render: (text, record) => {
      return (
        <Link to={`/order/list/detail/${record.expressOrderId}`}>
          <FormattedMessage id="orderSearch.table.goToDetail" />
        </Link>
      );
    },
  },
];

const Result = React.memo(props => (
  <ResultTable {...props} columns={columns} keyStr="expressOrderId" width="1500px" />
));

export default Result;
