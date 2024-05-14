import { render, screen } from '@testing-library/react';
import OrcamentoChamada from './';

describe('<OrcamentoChamada />', () => {
  it('should render OrcamentoChamada component without crashing', () => {
    render(<OrcamentoChamada />);

    expect(screen.getByText('Orçamento')).toBeInTheDocument();
  });

  it('should render main elements correctly', () => {
    render(<OrcamentoChamada />);

    expect(screen.getByAltText('trator-jcb')).toBeInTheDocument();
    expect(
      screen.getByText(/Não está achando a peça que precisa/i),
    ).toBeInTheDocument();
    expect(screen.getByText('Fazer orçamento!')).toBeInTheDocument();
  });
});
