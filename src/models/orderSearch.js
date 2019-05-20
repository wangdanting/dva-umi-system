import moment from 'moment';
import handleSearch from '@/services/orderSearch';

const dateFormat = 'YYYY-MM-DD';
const beginDay = moment(new Date('2019-03-01'), dateFormat)
  .startOf('day')
  .valueOf();
const endDay = moment(new Date('2019-05-01'), dateFormat)
  .endOf('day')
  .valueOf();

export default {
  namespace: 'orderSearch',
  state: {
    data: [], // 表单数据
    dataTotal: 0, // 总的查询条数
    queryData: {
      status: 'all', // 订单状态
      orderWay: 'all', // 订单类型
      keyWords: '', // 关键字
      expectFetchCurrentStart: beginDay, // 开始时间
      expectFetchCurrentEnd: endDay, // 结束时间
      page: 0,
      size: 10,
    }, // 查询条件
  },
  effects: {
    *handleSearch({ payload }, { call, put }) {
      const { results, totalCount } = yield call(handleSearch, payload);
      yield put({
        type: 'save',
        payload: {
          data: results,
          dataTotal: totalCount,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
