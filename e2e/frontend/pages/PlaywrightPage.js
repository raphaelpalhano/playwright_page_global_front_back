import itens from '../../factory/itens';
import { PlaywrightLocator } from '../locators/PlaywrightLocator';

export class PlaywrightPage {
  static async fillItem(choice) {
    const iten = itens.products(choice);
    await PlaywrightLocator.item().fill(iten.task[0]);
  }

  static async addItem() {
    await PlaywrightLocator.item().press('Enter');
  }

  static async validItem(item) {
    await expect(await PlaywrightLocator.label().innerText()).to.contain(item);
  }
}
