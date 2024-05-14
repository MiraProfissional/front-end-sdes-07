import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Products from '../../templates/Products';
import Login from '../../templates/Login';

describe('<Footer />', () => {
  it('should render Footer component without crashing', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
  });

  it('should render texts about Paginas', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText('Páginas')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre Nós')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
    expect(screen.getByText('Produtos')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should render texts about Contato', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText('Contatos')).toBeInTheDocument();
    expect(screen.getByText('(12) 3942-3300')).toBeInTheDocument();
    expect(screen.getByText('(12) 99783-3901')).toBeInTheDocument();
    expect(screen.getByText('vendas@traqmak.com.br')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Rua Araguaia, 70 - Vila São Bento São José dos Campos - São Paulo',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Segunda à Sexta-Feira das 8:30h as 17:30h Sábado das 8:30h às 12h',
      ),
    ).toBeInTheDocument();
  });

  it('should render texts about Redes Sociais', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText('Redes Sociais')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Whatsapp')).toBeInTheDocument();
  });

  it('should have the corrects atributes: Redes Sociais', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByText('Facebook')).toHaveAttribute(
      'href',
      'https://pt-br.facebook.com/trakmaq/',
    );
    expect(screen.getByText('Facebook')).toHaveAttribute('target', '_blank');
    expect(screen.getByText('Instagram')).toHaveAttribute(
      'href',
      'https://www.instagram.com/trakmaq/',
    );
    expect(screen.getByText('Instagram')).toHaveAttribute('target', '_blank');
    expect(screen.getByText('Whatsapp')).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=5512997833901',
    );
    expect(screen.getByText('Instagram')).toHaveAttribute('target', '_blank');
  });

  it('should redirect correctly when clicking on navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/produtos']}>
        <Routes>
          <Route path="/produtos" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText('Produtos'));
    expect(screen.getByText('Testando pagina de produtos')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Testando pagina de login')).toBeInTheDocument();
  });
});
