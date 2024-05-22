import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';
import Home from '../../src/templates/Home';
import Products from '../../src/templates/Products';
import SobreNos from '../../src/components/SobreNos';
import Contatenos from '../../src/components/Contatenos';
import Login from '../../src/components/Login';

/* eslint-disable */
Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options;

  const wrapped = (
    <MemoryRouter {...routerProps}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contatenos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {component}
    </MemoryRouter>
  );

  return mount(wrapped, mountOptions);
});

describe('Navbar.cy.jsx', () => {
  it('should render the component', () => {
    cy.mount(<Navbar />);

    cy.get('[data-cy="navbar-link-home"]').contains('Home');
    cy.get('[data-cy="navbar-link-sobre-nos"]').contains('Sobre Nós');
    cy.get('[data-cy="navbar-link-contato"]').contains('Contato');
    cy.get('[data-cy="navbar-link-produtos"]').contains('Produtos');
    cy.get('[data-cy="navbar-link-login"]').contains('Login');
  });

  it('should navigate to the home page', () => {
    cy.mount(<Navbar />, { routerProps: { initialEntries: ['/produtos'] } });
    cy.get('[data-cy="navbar-link-home"]').click();
    cy.get('h2').contains('Trakmaq, sua solução!');
  });

  it('should navigate to the "Sobre Nós" page', () => {
    cy.mount(<Navbar />, { routerProps: { initialEntries: ['/produtos'] } });
    cy.get('[data-cy="navbar-link-sobre-nos"]').click();
    cy.get('h2').contains('Trakmaq, sua solução!');
  });

  it('should navigate to the "Contato" page', () => {
    cy.mount(<Navbar />, { routerProps: { initialEntries: ['/produtos'] } });
    cy.get('[data-cy="navbar-link-contato"]').click();
    cy.get('h2').contains('Trakmaq, sua solução!');
  });

  it('should navigate to the "Produtos" page', () => {
    cy.mount(<Navbar />, { routerProps: { initialEntries: ['/'] } });
    cy.get('[data-cy="navbar-link-produtos"]').click();
    cy.get('h2').contains('Testando pagina de produtos');
  });

  it('should open the login sidebar', () => {
    cy.mount(<Navbar />);
    cy.get('[data-cy="navbar-link-login"] button').click();
    cy.get('.sidebar').should('be.visible');
  });
});
