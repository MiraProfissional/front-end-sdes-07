import FormularioContato from './';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<FormularioContato />', () => {
  it('should render', () => {});

  it('should handle form input correctly', () => {
    render(<FormularioContato />);

    fireEvent.change(screen.getByLabelText('Nome:'), {
      target: { value: 'João' },
    });
    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'joao@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Assunto:'), {
      target: { value: 'Dúvida sobre produto' },
    });
    fireEvent.change(screen.getByLabelText('Mensagem:'), {
      target: { value: 'Tenho uma dúvida sobre o produto X.' },
    });

    expect(screen.getByLabelText('Nome:')).toHaveValue('João');
    expect(screen.getByLabelText('Email:')).toHaveValue('joao@example.com');
    expect(screen.getByLabelText('Assunto:')).toHaveValue(
      'Dúvida sobre produto',
    );
    expect(screen.getByLabelText('Mensagem:')).toHaveValue(
      'Tenho uma dúvida sobre o produto X.',
    );
  });
});
