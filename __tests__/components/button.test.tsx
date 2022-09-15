import { Button } from '@/components/index';
import { render, screen } from '../test-utils';

describe('Button', () => {
  describe('when text is passed', () => {
    it('should render a button with text', () => {
      render(
        <Button name="test-button" type="button">
          Test
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Test');
    });
  });

  describe('when loading', () => {
    it('should render a button with a spinner', () => {
      render(<Button name="test-button" type="button" loading />);

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByRole('button').getAttribute('aria-busy')).toEqual(
        'true'
      );
    });
  });

  describe('when an icon is passed', () => {
    it('should render a button with an icon', () => {
      render(<Button name="test-button" type="button" icon="discord" />);

      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });

  describe('when the variant is primary', () => {
    it('should have correct styles', () => {
      const { container } = render(<Button name="test-button">Test</Button>);

      expect(container).toMatchSnapshot();
    });
  });

  describe('when the variant is cta', () => {
    it('should have correct styles', () => {
      const { container } = render(
        <Button name="test-button" variant="cta">
          Test
        </Button>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
