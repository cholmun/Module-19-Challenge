import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('should render the Quiz component', () => {
    mount(<Quiz />);
    cy.get('[data-cy=quiz-container]').should('exist');
  });

  it('should start the quiz when the start button is clicked', () => {
    mount(<Quiz />);
    cy.get('[data-cy=start-button]').click();
    cy.get('[data-cy=question]').should('exist');
  });

});