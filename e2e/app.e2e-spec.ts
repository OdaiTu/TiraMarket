import { TiraMarketPage } from './app.po';

describe('tira-market App', function() {
  let page: TiraMarketPage;

  beforeEach(() => {
    page = new TiraMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tm works!');
  });
});
