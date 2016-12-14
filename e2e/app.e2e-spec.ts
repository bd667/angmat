import { AngprojPage } from './app.po';

describe('angproj App', function() {
  let page: AngprojPage;

  beforeEach(() => {
    page = new AngprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
