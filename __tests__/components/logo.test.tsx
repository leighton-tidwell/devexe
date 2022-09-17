import { Logo } from '@/components/index';
import { render, screen } from '../test-utils';

describe('Logo', () => {
  it('should render a logo with default logo', () => {
    render(<Logo />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toBe(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });

  it('should render a logo with icon logo', () => {
    render(<Logo variant="icon" />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
  });

  it('should render a logo with text logo', () => {
    render(<Logo variant="no-icon" />);

    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain(
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );
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
});
