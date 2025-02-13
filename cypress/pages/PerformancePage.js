import BasePage from '../support/BasePage';

class PerformancePage extends BasePage {
    constructor() {
        super();
        this.testData = {};
        this.selectors = {
            menu: {
                menuGeral: '.oxd-sidepanel-body'
            },
            configure: {
                selectConfigure: ':nth-child(1) > .oxd-topbar-body-nav-tab-item',
                menuConfigure: '.oxd-dropdown-menu',
                addKPIs: '.orangehrm-header-container > .oxd-button',
                keyPerformanceIndicator: '.oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
                dropdownJobTitleList: '.oxd-select-wrapper .oxd-select-option',
                dropdownJobTitle: '.oxd-select-text-input',
                minimumRating: '.oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
                radioMakeDefault: '.oxd-switch-input',
                saveKPIS: '.oxd-button--secondary',
                toastSucess: '.oxd-toast'
            }
        }
    }
    selectPerformance() {
        this.containsClick(this.selectors.menu.menuGeral, 'Performance');
        return this;
    }

    addKPIS() {
        this.click(this.selectors.configure.selectConfigure);
        this.containsClick(this.selectors.configure.menuConfigure, 'KPIs');
        this.click(this.selectors.configure.addKPIs);
        this.type(this.selectors.configure.keyPerformanceIndicator, '123456');
        this.click(this.selectors.configure.dropdownJobTitle);
        this.selectRandom(this.selectors.configure.dropdownJobTitleList);
        this.clearText(this.selectors.configure.minimumRating);
        this.type(this.selectors.configure.minimumRating, '54');
        this.click(this.selectors.configure.radioMakeDefault);
        this.click(this.selectors.configure.saveKPIS);
        this.checkContain(this.selectors.configure.toastSucess, 'Success');
        return this;
    }
}

export default new PerformancePage();

