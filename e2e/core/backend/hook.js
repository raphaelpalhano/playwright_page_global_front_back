import {
  Before,
  After,
  BeforeAll,
  setDefaultTimeout,
  AfterAll,
} from '@cucumber/cucumber';
import { request } from '@playwright/test';
import { config } from './config';

setDefaultTimeout(process.env.PWDEBUG ? -1 : config.TIMEOUT);

BeforeAll(async () => {
  global.interact = await request.newContext({
    baseURL: config.BASE_API_URL,
    extraHTTPHeaders: {
      Accept: 'application/json',
      // Add authorization token to all requests.
      // 'Authorization': `token ${process.env.API_TOKEN}`,
    },
    // httpCredentials: {
    //   username: process.env.USERNAME || 'random',
    //   password: process.env.PASSWORD || 'random',
    // },
    timeout: config.TIMEOUT,
  });
});

Before(async ({ pickle }) => {
  global.testName = pickle.name.replace(/\W/g, '-');
});

After(async function (scenario) {
  if (scenario.result.status) {
    await this.attach(
      `Status: ${scenario.result.status}. Duration:${scenario.result.duration.seconds}s`,
    );
  }
});

AfterAll(async () => {
  await interact.dispose();
});
