export class PlaywraightPage {
  static async fillItem(item) {
    await page.fill('.new-todo', item);
  }

  static async addItem() {
    await page.locator('.new-todo').press('Enter');
  }

  static async validItem(item) {
    const result = await page.innerText(`.view label`);
    await expect(result).to.equal(item);
  }
}
