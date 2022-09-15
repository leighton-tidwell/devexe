import { Header } from '@/components/index';
import { render, screen } from '../test-utils';

describe('Header', () => {
  describe('when user is not authed', () => {
    it('should render the unauth header', () => {
      render(<Header auth={false} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('when user is authed', () => {
    it('should render the auth header', () => {
      render(<Header auth />);

      expect(
        screen.getByRole('button', { name: 'Profile options' })
      ).toBeInTheDocument();
    });
  });
});
