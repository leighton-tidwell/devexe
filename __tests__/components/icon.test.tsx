import { Icon } from '@/components/index';
import { render, screen } from '../test-utils';

describe('Icon', () => {
  describe('when icon is passed', () => {
    it('should render an icon', () => {
      render(<Icon icon="discord" />);

      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });

  describe('when icon and color are passed', () => {
    it('should render an icon with color', () => {
      render(<Icon icon="discord" color="red" />);

      const icon = screen.getByRole('img');

      expect(icon.getAttribute('fill')).toEqual('red');
    });
  });

  describe('when size is passed', () => {
    it('should render an icon with a size', () => {
      render(<Icon icon="discord" size="sm" />);

      const icon = screen.getByRole('img');

      expect(icon.parentElement).toHaveStyle({ width: '18px', height: '18px' });
    });
  });
});
