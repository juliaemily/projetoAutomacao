import PerformancePage from "../pages/PerformancePage";

describe('Deve ', () => {
  beforeEach(() => {
    cy.setupAndLogin();
  });

  it('Deve adicionar KPIs com sucesso', () => {
    PerformancePage
      .selectPerformance()
      .addKPIS()
  });
});

