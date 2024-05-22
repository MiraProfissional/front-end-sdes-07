import React from 'react';
import FormularioContato from '../../src/components/FormularioContato';

describe('FormularioContato.cy.jsx', () => {
  beforeEach(() => {
    /* eslint-disable */
    cy.mount(<FormularioContato />);
   })

  it('should render the component', () => {
    cy.get('[data-cy=contato-input-nome').should('be.empty')
    cy.get('[data-cy=contato-input-email').should('be.empty')
    cy.get('[data-cy=contato-input-telefone').should('be.empty')
    cy.get('[data-cy=contato-input-assunto').should('be.empty')
    cy.get('[data-cy=contato-input-mensagem').should('be.empty')
    cy.get('[data-cy=contato-botao').should('have.text','Enviar')
  });


  it('should check if the inputs are doing the correct validations', () => {
    cy.get('[data-cy=contato-input-nome]').type('Nome de teste')
    cy.get('[data-cy=contato-input-nome-erro]').should('be.empty')
    cy.get('[data-cy=contato-input-email]').type('joao.email@gmail.com')
    cy.get('[data-cy=contato-input-email-erro]').should('be.empty')
    cy.get('[data-cy=contato-input-telefone]').type('(12) 99743-6507')
    cy.get('[data-cy=contato-input-telefone-erro]').should('be.empty')
    cy.get('[data-cy=contato-input-assunto]').type('Assunto de teste')
    cy.get('[data-cy=contato-input-assunto-erro]').should('be.empty')
    cy.get('[data-cy=contato-input-mensagem]').type('Mensagem de teste')
    cy.get('[data-cy=contato-input-mensagem-erro]').should('be.empty')
  })

  it('should display "o campo [Nome do Campo] é obrigatório" messages for fields that are required', () => {
    cy.get('[data-cy=contato-input-nome]').clear();
    cy.get('[data-cy=contato-input-email]').clear();
    cy.get('[data-cy=contato-input-assunto]').clear();
    cy.get('[data-cy=contato-input-mensagem]').clear();
    cy.get('[data-cy=contato-botao]').click();
    cy.get('[data-cy=contato-input-nome-erro]').contains('O campo Nome é obrigatório');
    cy.get('[data-cy=contato-input-email-erro]').contains('O campo Email é obrigatório');
    cy.get('[data-cy=contato-input-assunto-erro]').contains('O campo Assunto é obrigatório');
    cy.get('[data-cy=contato-input-mensagem-erro]').contains('O campo Mensagem é obrigatório');
  });

  it('should check if the Telefone field is validating correctly', () => {
    cy.get('[data-cy=contato-input-telefone]').type('(12) 9999')
    cy.get('[data-cy=contato-botao]').click();
    cy.get('[data-cy=contato-input-telefone-erro]').contains('Formato de telefone inválido. Ex: (XX) 9XXXX-XXXX')

    cy.get('[data-cy=contato-input-telefone]').clear()

    cy.get('[data-cy=contato-input-telefone]').type('(12) 999999999999999999999999999')
    cy.get('[data-cy=contato-botao]').click();
    cy.get('[data-cy=contato-input-telefone-erro]').contains('Formato de telefone inválido. Ex: (XX) 9XXXX-XXXX')

    cy.get('[data-cy=contato-input-telefone]').clear()

    cy.get('[data-cy=contato-input-telefone]').type('(12) 997436507')
    cy.get('[data-cy=contato-botao]').click();
    cy.get('[data-cy=contato-input-telefone-erro]').contains('Formato de telefone inválido. Ex: (XX) 9XXXX-XXXX')

    cy.get('[data-cy=contato-input-telefone]').clear()

    cy.get('[data-cy=contato-input-telefone]').type('(12) 89743-6507')
    cy.get('[data-cy=contato-botao]').click();
    cy.get('[data-cy=contato-input-telefone-erro]').contains('Formato de telefone inválido. Ex: (XX) 9XXXX-XXXX')



  })

});
