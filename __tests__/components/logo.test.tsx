import { Logo } from '@/components/index';
import { render, screen } from '../test-utils';

describe('Logo', () => {
  it('should render a logo with default logo', () => {
    render(<Logo />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain('/images/logo-full.svg');
  });

  it('should render a logo with icon logo', () => {
    render(<Logo variant="icon" />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain('/images/logo-icon.svg');
  });

  it('should render a logo with text logo', () => {
    render(<Logo variant="no-icon" />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain('/images/logo-no-icon.svg');
  });

  it('should render a logo with alt text', () => {
    render(<Logo />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toEqual('Full Devexe logo');
  });

  it('should render a logo with icon logo', () => {
    render(<Logo variant="icon" />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toEqual('Devexe icon');
  });

  it('should render a logo with text logo', () => {
    render(<Logo variant="no-icon" />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.alt).toEqual('Devexe logo text');
  });

  it('should render a logo with custom styles', () => {
    render(<Logo sx={{ width: '20px' }} />);

    const img = screen.getByRole('img');
    expect(img).toHaveStyle({ width: '20px' });
  });
});
