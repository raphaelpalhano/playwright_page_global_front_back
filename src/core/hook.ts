import { removeFiles } from '../helpers/managerFiles';
import { BasePage } from '../pages/BasePage';
import {
  Before,
  After,
  BeforeAll,
  setDefaultTimeout,
  ITestCaseHookParameter,
} from '@cucumber/cucumber';

setDefaultTimeout(process.env.PWDEBUG ? -1 : 60 * 1000);

BeforeAll(async function () {
  await removeFiles('reports/videos/*.webm');
});

Before(async function ({ pickle }: ITestCaseHookParameter) {
  await BasePage.setupPage();
  BasePage.startTime = new Date();
  BasePage.testName = pickle.name.replace(/\W/g, '-');
  await BasePage.startApp();
});

After(async function ({ result }: ITestCaseHookParameter) {
  const image = await BasePage.page.screenshot();
  if (result) {
    await this.attach(`Status: ${result?.status}. Duration:${result.duration?.seconds}s`);
    image && (await this.attach(image, 'image/png'));
  }
  await BasePage.page.close();
  await BasePage.context.close();
  await BasePage.browser.close();
});
