describe('Tech Quiz End-to-End Test', () => {
    it('should start the quiz and complete it', () => {
      cy.visit('/');
      cy.get('[data-cy=start-button]').click();
      cy.get('[data-cy=question]').should('have.length', 10);
  
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy=question]').eq(i).click(); 
      }
  
      cy.get('[data-cy=score]').should('exist');
      cy.get('[data-cy=new-quiz-button]').click();
      cy.get('[data-cy=question]').should('not.exist');
    });
  });