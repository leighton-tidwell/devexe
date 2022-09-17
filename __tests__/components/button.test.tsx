import { Button } from '@/components/index';
import { render, screen, fireEvent } from '../test-utils';

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
      fireEvent.click(button); // To get 100% coverage testing default function
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

  describe('when an onclick function is passed', () => {
    const onClick = jest.fn();

    it('should render a button that calls that function when clicked', () => {
      render(<Button name="test-button" type="button" onClick={onClick} />);

      fireEvent.click(screen.getByRole('button'));
      expect(onClick).toBeCalled();
    });
  });

  // Disabling these tests for now until we find out a better solution
  xdescribe('when the variant is primary', () => {
    it('should have correct styles', () => {
      const { container } = render(<Button name="test-button">Test</Button>);

      expect(container).toMatchSnapshot();
    });
  });

  xdescribe('when the variant is cta', () => {
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
