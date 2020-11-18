import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to frontEnd!');
  });


  it('login only registered users', () => {
    spyOn(component, 'isRegistered').and.callFake((a, b) => ((a === this.account_name1) && (b === this.password_1)));
    component.login();
    expect(component.loginStatus).toBe('user logged in');
    expect(page.getLoginMessage()).toEqual("You've logged in");
    

    

    component.login();
    expect(component.loginStatus).toBe('user not logged in');
    expect(page.getLoginMessage()).toEqual('This login is not on file. You must register.');
    
  });


});
