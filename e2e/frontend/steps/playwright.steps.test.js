import { Given, Then } from '@cucumber/cucumber';
import { PlaywrightPage } from '../pages/PlaywrightPage';

Given('adiciono um item {string}', async (choice) => {
  await PlaywrightPage.fillItem(choice);
  await PlaywrightPage.addItem();
});

Then('deve exibir o item {string}', async (todo) => {
  await PlaywrightPage.validItem(todo);
});
