import { config } from '../core/config';
import { Browser, BrowserContext, chromium, firefox, Page, webkit } from '@playwright/test';

const VIDEO = true;

const options = {
  args: ['--start-maximized'],
  acceptDownloads: true,
  recordVideo: VIDEO ? { dir: 'reports/videos' } : undefined,
};

export abstract class BasePage {
  static testName?: string;
  static startTime?: Date;
  public static browser: Browser;
  public static page: Page;

  public static context: BrowserContext;

  private static async managerBrowsers() {
    let browser: Browser;
    switch (config.browser) {
      case 'firefox':
        browser = await firefox.launch(config.browserOptions);
        break;
      case 'webkit':
        browser = await webkit.launch(config.browserOptions);
        break;
      default:
        browser = await chromium.launch(config.browserOptions);
    }

    return browser;
  }

  public static async setupPage() {
    this.browser = await this.managerBrowsers();
    this.context = await this.browser.newContext(options);
    await this.context.tracing.start({ screenshots: true, snapshots: true });
    this.page = await this.context.newPage();
    return this.page;
  }

  public static async startApp() {
    await this.page.goto(config.BASE_URL);
  }
}
