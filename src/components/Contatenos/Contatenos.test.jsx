import { render, screen } from '@testing-library/react';
import Contatenos from './';

describe('<Contatenos />', () => {
  it('should render Contatenos component without crashing', () => {
    render(<Contatenos />);

    expect(screen.getByText('Contate-nos')).toBeInTheDocument();
  });

  it('should render main elements correctly', () => {
    render(<Contatenos />);

    expect(screen.getByText('Contate-nos')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Segunda à Sexta-Feira das 8:30h as 17:30h / Sábado das 8:30h às 12h',
      ),
    ).toBeInTheDocument();
  });
});
