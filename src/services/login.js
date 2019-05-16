import request from '@/utils/request';

export default async function login(payload) {
  return request('/api/cooperation/user/sessions/create', {
    method: 'post',
    params: payload,
  });
}
