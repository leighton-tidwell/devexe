import { Avatar } from '@/components/index';
import { render, screen } from '../test-utils';

describe('Avatar', () => {
  describe('when only alt is passed', () => {
    it('should should render the profile picture placeholder', () => {
      render(<Avatar alt="Default profile picture" />);
      expect(screen.getByText('?')).toBeInTheDocument();
      expect(screen.getByText('?')).toHaveAttribute(
        'aria-label',
        'Default profile picture'
      );
      expect(screen.getByText('?')).toHaveStyle({
        width: '32px',
        height: '32px'
      });
    });
  });

  describe('when src and alt are passed', () => {
    it('should should render the picture with an alt tag', () => {
      render(<Avatar alt="Default profile picture" src="/test" />);

      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      );
      expect(screen.getByRole('img')).toHaveAttribute(
        'alt',
        'Default profile picture'
      );
    });
  });

  describe('when size is passed', () => {
    it('should render a default profile picture with a set size', () => {
      render(<Avatar alt="Default profile picture" size="md" />);

      expect(screen.getByText('?')).toHaveStyle({
        width: '48px',
        height: '48px'
      });
    });
  });
});
