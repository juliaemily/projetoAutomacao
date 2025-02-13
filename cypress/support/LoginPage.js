import BasePage from '../support/BasePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      credenciais: {
        email: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        senha: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
      }
    }
  }

  login() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    this.type(this.selectors.credenciais.email, 'Admin');
    this.type(this.selectors.credenciais.senha, 'admin123');
    this.click('.oxd-button');
  }
}

export default new LoginPage()
