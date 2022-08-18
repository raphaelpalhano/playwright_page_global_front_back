import { requestWithBody } from '../base/rest.service';
import usersRequest from '../../../factory/users.request';

export async function loginUser(typeUser) {
  const request = await requestWithBody('/login', usersRequest.loginUser(typeUser));
  return request;
}

export async function createUser(typeUser) {
  const request = await requestWithBody('/usuarios', usersRequest.getUser(typeUser));
  return request;
}
