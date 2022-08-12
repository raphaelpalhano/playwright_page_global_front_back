import { requestWithBody } from '../base/rest.service';
import factory from '../../../../fixtures/backend/factory';

export async function loginUser(typeUser) {
  const request = await requestWithBody('/login', factory.loginUser(typeUser));
  return request;
}

export async function createUser(typeUser) {
  const request = await requestWithBody('/usuarios', factory.getUser(typeUser));
  return request;
}
