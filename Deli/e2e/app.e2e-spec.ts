import { DeliPage } from './app.po';

describe('deli App', function() {
  let page: DeliPage;

  beforeEach(() => {
    page = new DeliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
