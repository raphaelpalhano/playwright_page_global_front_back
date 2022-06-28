# Playwright PageObject Cucumber

# Configurations Steps

## Install

1. first `npm i`
2. second `npx playwright install`

## Settings

1. src/core/config.ts

```ts
export const config = {
  browser: process.env.BROWSER || 'chromium', // select browser
  browserOptions, // base config for browser
  BASE_URL: 'https://demo.playwright.dev/todomvc/', // url used in automation
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: 'https://catfact.ninja/',
};
```

# Reports

## Html

- run the command `npm run report`.

## Allure

### At least in Lubuntu 20.04 to open the html report

- Modify the `package.json` in `"report": "xdg-open reports/report.html"`

## To view allure report

- run the command `npm run allure`.
