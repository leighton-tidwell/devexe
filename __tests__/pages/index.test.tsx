import HomePage from '@/pages/index';
import { render, screen } from '../test-utils';

describe('HomePage', () => {
  describe('when rendered', () => {
    it('should render the home page', () => {
      render(<HomePage />);

      expect(screen.getByText('Developer')).toBeInTheDocument();
    });
  });
});
