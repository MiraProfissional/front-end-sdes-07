import React from 'react';
import Navbar from '../../src/components/Navbar';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';

/* eslint-disable */
Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>;

  return mount(wrapped, mountOptions);
});

describe('Navbar.cy.jsx', () => {
  it('should render the component', () => {

    cy.mount(<Navbar />);

    cy.get('[data-cy="navbar-link-home"]').contains('Home')
    cy.get('[data-cy="navbar-link-sobre-nos"]').contains('Sobre Nós')
    cy.get('[data-cy="navbar-link-contato"]').contains('Contato')
    cy.get('[data-cy="navbar-link-produtos"]').contains('Produtos')
    cy.get('[data-cy="navbar-link-login"]').contains('Login')
  });

  // it('login link should be active when url is "/login"', () => {
  //   cy.mount(<Navbar />, {
  //     routerProps: {
  //       initialEntries: ['/login'],
  //     },
  //   });

  //   cy.get('a').contains('Login').should('have.class', 'active');
  // });
});
