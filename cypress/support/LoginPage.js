import BasePage from '../support/BasePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      credenciais: {
        username: 'input[name="username"]',
        password: 'input[name="password"]'
      }
    }
  }

  login() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    this.type(this.selectors.credenciais.username, 'Admin');
    this.type(this.selectors.credenciais.password, 'admin123');
    this.click('.oxd-button');
  }
}

export default new LoginPage()
