import { Button } from '@/components/index';
import { render, screen } from '../test-utils';

describe('Button', () => {
  it('should render a button with primary styles applied', () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
