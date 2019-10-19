import request from '@/utils/request';
import { UserRegisterParams } from './index';

export async function fakeRegister(params: UserRegisterParams) {
  return request('/api/admin/signup', {
    method: 'POST',
    data: params,
  });
}
