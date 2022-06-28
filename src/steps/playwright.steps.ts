import { Factory } from '../fixtures/Factory';
import { PlaywraightPage } from '../pages/PlaywraightPage';
import { Given, Then, When } from '@cucumber/cucumber';

const items = Factory.items('valid').task!;

Given('fill todo with one item', async function () {
  await PlaywraightPage.fillItem(items[0]);
});

When('press enter', async function () {
  await PlaywraightPage.addItem();
});

Then('must display the todo', async function () {
  await PlaywraightPage.validItem(items[0]);
});
