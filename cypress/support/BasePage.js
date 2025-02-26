class BasePage {
    constructor() {
        this.timeout = { timeout: 30000 };
    }

    /**
     * Método que espera e obtém um elemento
     * @param {string} selector 
     * @returns {Cypress.Chainable}
     */
    getElement(selector) {
        cy.wait(2000);
        return cy.get(selector, this.timeout);
    }

    /**
     * Método que digita em um campo de entrada
     * @param {string} selector 
     * @param {string} text 
     * @returns {Cypress.Chainable}
     */
    type(selector, text) {
        return this.getElement(selector).type(text);
    }

    click(selector) {
        cy.get(selector).click({ force: true });
    }

    /**
 * Método que clica em um elemento que contém um texto
 * @param {string} selector 
 * @param {string} textContains 
 * @returns 
 */
    containsClick(selector, textContains) {
        cy.wait(2000);
        return cy.get(selector).contains(textContains).click({ force: true });
    }

    selectRandom(selector) {
        cy.get(selector).then($options => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click();
        });
    }

    elementExists(selector) {
        return cy.get(selector).should('exist');
    }

    elementNoExists(selector) {
        return cy.get(selector).should('not.exist');
    }

    elementShouldNotContain(selector, value) {
        cy.get(selector).should('not.contain', value);
    }
   
    checkContain(selector, value) {
        return cy.get(selector).should('contain', value);
    }

    clearText(selector) {
        return this.getElement(selector).clear();
    }

    selectIcon(selector, button) {
        cy.get(selector).eq('0').closest(button).click({ force: true });
    }

    getValue(selector) {
        return cy.get(selector).invoke('text').then((text) => {
          return text.trim();
        });
    } 

    selectDownarrow(selector){
        return cy.get(selector).type('{downarrow}').type('{enter}');
    }
    
    waitForElement(selector){
        return this.getElement(selector, this.timeout).should('be.visible');
    }
    
    selectIndex(selector,index){
        return this.getElement(selector).eq(index).click();
    }

}

export default BasePage;
