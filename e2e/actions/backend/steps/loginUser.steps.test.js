import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { loginUser } from '../functions/services/user.service';

let response;

Given('o acesso com usuario {string}', async (typeUser) => {
  response = await loginUser(typeUser);
});

Then('deve exibir a mensagem {string}', async (messageText) => {
  const body = await response.json();
  expect(body.message).to.be.eq(messageText);
});
