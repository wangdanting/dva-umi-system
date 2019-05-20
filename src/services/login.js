import request from '@/utils/request';

export default async function login(payload) {
  return request('/api/bp/sessions/create', {
    method: 'post',
    params: payload,
  });
}
