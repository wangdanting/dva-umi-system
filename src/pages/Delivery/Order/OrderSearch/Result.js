import React from 'react';
import Link from 'umi/link';
import ResultTable from '@/components/ResultTable';

const columns = [
  {
    title: '订单号',
    dataIndex: 'expressOrderId',
    key: 'expressOrderId',
  },
  {
    title: '订单类型',
    dataIndex: 'orderWayName',
    key: 'orderWayName',
  },
  {
    title: '配送站',
    dataIndex: 'merchName',
    key: 'merchName',
  },
  {
    title: '发货信息',
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
    title: '收货信息',
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
    title: '配送员',
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
    title: '订单支付时间',
    dataIndex: 'paidTimeFormat',
    key: 'paidTimeFormat',
  },
  {
    title: '配送费',
    dataIndex: 'deliveryFee',
    key: 'deliveryFee',
    render: text => {
      return `${text}元`;
    },
  },
  {
    title: '配送类型',
    dataIndex: 'orderTypeName',
    key: 'orderTypeName',
  },
  {
    title: '状态',
    dataIndex: 'statusName',
    key: 'statusName',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    width: 85,
    render: (text, record) => {
      return <Link to={`/order/list/detail/${record.expressOrderId}`}>查看详情</Link>;
    },
  },
];

const Result = React.memo(props => (
  <ResultTable {...props} columns={columns} keyStr="expressOrderId" width="1500px" />
));

export default Result;
