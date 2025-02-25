import { faker } from '@faker-js/faker';
import BasePage from '../support/BasePage';

class PerformancePage extends BasePage {
    constructor() {
        super();
        this.testData = {
            smallestNumber: faker.number.int({ min: 1, max: 50 }),
            middleValue: faker.number.int({ min: 50, max: 100 }),
            largestNumber: faker.number.int({ min: 1000, max: 9999 })
        };
        this.selectors = {
            menu: {
                menuGeral: '.oxd-sidepanel-body'
            },
            configure: {
                selectConfigure: ':nth-child(1) > .oxd-topbar-body-nav-tab-item',
                menuConfigure: '.oxd-dropdown-menu',
            },
            KPIs: {
                addKPIs: '.orangehrm-header-container > .oxd-button',
                keyPerformanceIndicator: '.oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
                dropdownJobTitleList: '.oxd-select-wrapper .oxd-select-option',
                dropdownJobTitle: '.oxd-select-text-input',
                minimumRating: '.oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
                maximumRating: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
                radioMakeDefault: '.oxd-switch-input',
                saveKPIS: '.oxd-button--secondary',
                toastSucess: '.oxd-toast',
                grid: '.orangehrm-container',
                editIcon: 'button .bi-pencil-fill',
                deleteButton: 'button .bi-trash',
                popupDelete: '.orangehrm-modal-header > .oxd-text',
                buttons: {
                    yes: '.oxd-button--label-danger',
                    no: '.orangehrm-modal-footer > .oxd-button--ghost'
                },
                checkBox: 'input[type="checkbox"][value="0"]',
                btnDelete: 'button.oxd-button--label-danger.oxd-button'
            }
        }
    }
    selectPerformance() {
        this.containsClick(this.selectors.menu.menuGeral, 'Performance');
        return this;
    }

    selectKPIS() {
        this.click(this.selectors.configure.selectConfigure);
        this.containsClick(this.selectors.configure.menuConfigure, 'KPIs');
        cy.wait(3000);
        return this;
    }

    addKPIS() {
        this.click(this.selectors.KPIs.addKPIs);
        this.type(this.selectors.KPIs.keyPerformanceIndicator, this.testData.largestNumber);
        this.click(this.selectors.KPIs.dropdownJobTitle);
        this.selectRandom(this.selectors.KPIs.dropdownJobTitleList);
        this.clearText(this.selectors.KPIs.minimumRating);
        this.type(this.selectors.KPIs.minimumRating, this.testData.smallestNumber);
        this.clearText(this.selectors.KPIs.maximumRating);
        this.type(this.selectors.KPIs.maximumRating, this.testData.middleValue);
        this.click(this.selectors.KPIs.radioMakeDefault);
        return this;
    }

    editKPIS() {
        this.selectIcon(this.selectors.KPIs.editIcon, 'button');
        this.clearText(this.selectors.KPIs.keyPerformanceIndicator);
        this.type(this.selectors.KPIs.keyPerformanceIndicator, this.testData.largestNumber);
        this.click(this.selectors.KPIs.dropdownJobTitle);
        this.selectRandom(this.selectors.KPIs.dropdownJobTitleList);
        this.clearText(this.selectors.KPIs.minimumRating);
        this.type(this.selectors.KPIs.minimumRating, this.testData.smallestNumber);
        this.clearText(this.selectors.KPIs.maximumRating);
        this.type(this.selectors.KPIs.maximumRating, this.testData.middleValue);
        return this;
    }

    selectDeleteIcon() {
        this.selectIcon(this.selectors.KPIs.deleteButton, 'button');
        return this;
    }

    selectButtonDelete() {
        this.click(this.selectors.KPIs.checkBox);
        this.containsClick(this.selectors.KPIs.btnDelete, 'Delete Selected');
        return this;
    }

    deleteItem() {
        this.elementExists(this.selectors.KPIs.popupDelete);
        this.containsClick(this.selectors.KPIs.buttons.yes, 'Yes, Delete');
        this.checkContain(this.selectors.KPIs.toastSucess, 'Successfully Deleted');
        return this;
    }

    kpisValidations() {
        this.click(this.selectors.KPIs.saveKPIS);
        this.checkContain(this.selectors.KPIs.toastSucess, 'Success');
        cy.wait(3000);
        this.checkContain(this.selectors.KPIs.grid, this.testData.largestNumber);
        return this;
    }
}

export default new PerformancePage();

