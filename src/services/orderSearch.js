import request from '@/utils/request';

export default async function handleSearch(payload) {
  return request('/api/bp/express_orders', {
    method: 'get',
    params: payload,
  });
}
