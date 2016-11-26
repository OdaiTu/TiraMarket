import { browser, element, by } from 'protractor';

export class TiraMarketPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tm-root h1')).getText();
  }
}
