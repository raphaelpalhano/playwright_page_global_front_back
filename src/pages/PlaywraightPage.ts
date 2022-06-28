import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class PlaywraightPage extends BasePage {
  static async fillItem(item: string) {
    await super.page.fill('.new-todo', item);
  }

  static async addItem() {
    await super.page.locator('.new-todo').press('Enter');
  }

  static async validItem(item: string) {
    await expect(super.page.locator('.view label')).toHaveText(item);
  }
}
