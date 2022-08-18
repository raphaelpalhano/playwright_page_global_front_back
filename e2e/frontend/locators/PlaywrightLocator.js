export class PlaywrightLocator {
  static item() {
    const element = page.locator('.new-todo');
    return element;
  }

  static label() {
    const element = page.locator('.view label');
    return element;
  }
}
