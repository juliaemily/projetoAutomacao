import BasePage from '../support/BasePage';
import { faker } from '@faker-js/faker';
class ClaimPage extends BasePage {
    constructor() {
        super();
        this.testData = {
            text: faker.lorem.paragraph(),
            value: faker.finance.amount()
        };
        this.selectors = {
            menu: {
                menuGeral: '.oxd-sidepanel-body'
            },
            assign: {
                selectAssign: '.orangehrm-header-container > .oxd-button',
                employeeName: '.oxd-autocomplete-wrapper',
                selectOptionEmployee: '.oxd-autocomplete-dropdown',
                eventAndCurrency: '.oxd-select-wrapper',
                selectOptionEvent: '.oxd-select-dropdown',
                remarks: '.oxd-textarea',
                btnCreate: '.oxd-button--secondary',
                btnAdd: ':nth-child(3) > .orangehrm-action-header > .oxd-button',
                selectExpenseType: '.oxd-select-text',
                btnCalendar: '.oxd-date-input > .oxd-icon',
                calendarOpen: '.oxd-date-input-calendar',
                amount: '.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
                note: '.oxd-grid-1 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-textarea',
                save: '.oxd-form-actions > .oxd-button--secondary'
               
            }
        }
    }
    selectClaim() {
        this.containsClick(this.selectors.menu.menuGeral, 'Claim');
        return this;
    }

    addClaim() {
        this.click(this.selectors.assign.selectAssign);
        this.type(this.selectors.assign.employeeName, 'Smith');
        this.waitForElement(this.selectors.assign.selectOptionEmployee);
        this.selectDownarrow(this.selectors.assign.employeeName);
        this.selectIndex(this.selectors.assign.eventAndCurrency, 0);
        this.selectRandom(this.selectors.assign.selectOptionEvent);
        this.selectIndex(this.selectors.assign.eventAndCurrency, 1);
        this.selectRandom(this.selectors.assign.selectOptionEvent);
        this.type(this.selectors.assign.remarks, this.testData.text);
        this.click(this.selectors.assign.btnCreate);
        this.click(this.selectors.assign.btnAdd);
        this.click(this.selectors.assign.selectExpenseType);
        this.selectRandom(this.selectors.assign.selectOptionEvent);
        this.click(this.selectors.assign.btnCalendar);
        this.containsClick(this.selectors.assign.calendarOpen, 'Today');
        this.type(this.selectors.assign.amount, this.testData.value);
        this.type(this.selectors.assign.note, this.testData.text);
        this.click(this.selectors.assign.save);


        return this;
    }
}

export default new ClaimPage();