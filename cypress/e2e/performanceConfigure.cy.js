import PerformancePage from "../pages/PerformancePage";

describe('Ensure Successful Completion of All Registrations in the Configure/KPIs Section', () => {
  beforeEach(() => {
    cy.setupAndLogin();
  });

  it('Should add a KPI', () => {
    PerformancePage
      .selectPerformance()
      .selectKPIS()
      .addKPIS()
      .kpisValidations();
  });

  it('Should edit a KPI', () => {
    PerformancePage
      .selectPerformance()
      .selectKPIS()
      .editKPIS()
      .kpisValidations();
  });

  it('Should delete a KPI using the icon', () => {
    PerformancePage
      .selectPerformance()
      .selectKPIS()
      .selectDeleteIcon()
      .deleteItem();
  });

  it('Should delete a KPI using Deleted Select', () =>{
    PerformancePage
      .selectPerformance()
      .selectKPIS()
      .selectButtonDelete()
      .deleteItem();
  })
});

