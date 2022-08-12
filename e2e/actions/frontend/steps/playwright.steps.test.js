import { Given, Then, When } from '@cucumber/cucumber';
import factory from '../../../fixtures/frontend/factory';
import { PlaywraightPage } from '../pages/PlaywraightPage';

const items = factory.products('valid');

Given('fill todo with one item', async () => {
  await PlaywraightPage.fillItem(items.task[0]);
});

When('press enter', async () => {
  await PlaywraightPage.addItem();
});

Then('must display the todo', async () => {
  await PlaywraightPage.validItem(items.task[0]);
});
