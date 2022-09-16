import { Hero } from '@/components/index';
import { render, screen, waitFor } from '../test-utils';

describe('Hero', () => {
  describe('when rendered', () => {
    it('should render the hero section', () => {
      render(<Hero />);

      expect(
        screen.getByRole('button', {
          name: 'Click to go to the features section'
        })
      ).toBeInTheDocument();
    });

    it('should resize itself on page resize', async () => {
      const { container } = render(<Hero />);

      await waitFor(() => {
        global.innerWidth = 500;
        global.innerHeight = 500;
        global.dispatchEvent(new Event('resize'));
      });

      expect(container.firstChild).toHaveStyle({ height: `${500 - 36}px` });

      await waitFor(() => {
        global.innerWidth = 1000;
        global.innerHeight = 1000;
        global.dispatchEvent(new Event('resize'));
      });

      expect(container.firstChild).toHaveStyle({ height: `${1000 - 36}px` });
    });
  });
});
