import { render, screen } from '@testing-library/react';
import SobreNos from './';

describe('<SobreNos />', () => {
  it('should render SobreNos component without crashing', () => {
    render(<SobreNos />);

    expect(screen.getByText('Sobre nós')).toBeInTheDocument();
  });

  it('should render main elements correctly', () => {
    render(<SobreNos />);

    expect(screen.getByAltText('yellow-background')).toBeInTheDocument();
    expect(screen.getByAltText('team-trakamaq')).toBeInTheDocument();
    expect(screen.getByText(/Sed ut perspiciatis/i)).toBeInTheDocument();
  });

  it('should load images correctly', () => {
    render(<SobreNos />);

    const backgroundImage = screen.getByAltText('yellow-background');
    const teamImage = screen.getByAltText('team-trakamaq');
    expect(backgroundImage).toHaveAttribute(
      'src',
      expect.stringContaining('.png'),
    );
    expect(teamImage).toHaveAttribute(
      'src',
      expect.stringContaining(
        'https://th.bing.com/th/id/OIP.KPwLL2a-vw67al0B_rGMQAHaE7?rs=1&pid=ImgDetMain',
      ),
    );
  });
});
