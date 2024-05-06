import { render, screen, fireEvent } from '@testing-library/react';
import Contatenos from './';

describe('<Contatenos />', () => {
  it('should render Contatenos component without crashing', () => {
    render(<Contatenos />);
    
    expect(screen.getByText('Contate-nos')).toBeInTheDocument();
  });

  it('should render main elements correctly', () => {
    render(<Contatenos />);
    
    expect(screen.getByText('Contate-nos')).toBeInTheDocument();
    expect(screen.getByText('Segunda à Sexta-Feira das 8:30h as 17:30h / Sábado das 8:30h às 12h')).toBeInTheDocument();
    
  });

  it('should handle form input correctly', () => {
    render(<Contatenos />);
   
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'João' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'joao@example.com' } });
    fireEvent.change(screen.getByLabelText('Assunto'), { target: { value: 'Dúvida sobre produto' } });
    fireEvent.change(screen.getByLabelText('Mensagem'), { target: { value: 'Tenho uma dúvida sobre o produto X.' } });
    
    expect(screen.getByLabelText('Nome')).toHaveValue('João');
    expect(screen.getByLabelText('Email')).toHaveValue('joao@example.com');
    expect(screen.getByLabelText('Assunto')).toHaveValue('Dúvida sobre produto');
    expect(screen.getByLabelText('Mensagem')).toHaveValue('Tenho uma dúvida sobre o produto X.');
  });

});
