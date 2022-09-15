import { Wrapper } from '@/components/index';
import { render } from '../test-utils';

describe('Wrapper', () => {
  describe('when used', () => {
    it('should render a grid', () => {
      const { container } = render(<Wrapper>test</Wrapper>);

      expect(container.firstElementChild).toHaveStyle('display: grid');
    });
  });
});
