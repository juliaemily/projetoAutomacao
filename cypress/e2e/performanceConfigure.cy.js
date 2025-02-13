import PerformancePage from "../pages/PerformancePage";

describe('Ensure Successful Completion of All Registrations in the Configure Section', () => {
  beforeEach(() => {
    cy.setupAndLogin();
  });

  it('Ensure Successful Addition of KPIs', () => {
    PerformancePage
      .selectPerformance()
      .addKPIS()
  });
});

