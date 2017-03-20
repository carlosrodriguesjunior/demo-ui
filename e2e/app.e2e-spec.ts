import { DemoUi2Page } from './app.po';

describe('demo-ui2 App', () => {
  let page: DemoUi2Page;

  beforeEach(() => {
    page = new DemoUi2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
