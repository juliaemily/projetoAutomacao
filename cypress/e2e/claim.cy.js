import ClaimPage from "../pages/ClaimPage";

describe('Login', () => {
  beforeEach(() => {
    cy.setupAndLogin();
  });

  it('Ensure Successful Assign Claim', () => {
    ClaimPage
      .selectClaim()
      .addClaim()
     
  });
});