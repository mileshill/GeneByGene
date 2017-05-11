import { GeneClinetPage } from './app.po';

describe('gene-clinet App', function() {
  let page: GeneClinetPage;

  beforeEach(() => {
    page = new GeneClinetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
