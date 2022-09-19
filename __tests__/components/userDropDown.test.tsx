import { UserDropdown } from '@/components/index';
import { userEvent, fireEvent, render, screen, waitFor } from '../test-utils';

describe('UserDropdown', () => {
  describe('when rendered', () => {
    it('should render a profile drop down', () => {
      render(<UserDropdown />);

      expect(
        screen.getByRole('button', { name: 'Profile options' })
      ).toBeInTheDocument();
    });
  });

  describe('when hovering', () => {
    it('should show the log out menu and update accessibility', async () => {
      render(<UserDropdown />);

      await waitFor(() => {
        userEvent.hover(
          screen.getByRole('button', { name: 'Profile options' })
        );
      });

      expect(
        screen.getByRole('button', { name: 'Profile options' })
      ).toHaveAttribute('aria-expanded', 'true');
    });

    it('should update accessibility when hovering over menu', async () => {
      render(<UserDropdown />);

      await waitFor(() => {
        userEvent.hover(
          screen.getByRole('button', { name: 'Profile options' })
        );
        userEvent.hover(screen.getByTestId('profile-dropdown'));
      });

      expect(screen.getByTestId('profile-dropdown')).toHaveAttribute(
        'aria-hidden',
        'false'
      );
    });

    it('should update accessibility when leaving the button', async () => {
      render(<UserDropdown />);

      await waitFor(() => {
        userEvent.hover(
          screen.getByRole('button', { name: 'Profile options' })
        );
        userEvent.hover(screen.getByTestId('profile-dropdown'));
        userEvent.unhover(screen.getByTestId('profile-dropdown'));
        userEvent.unhover(
          screen.getByRole('button', { name: 'Profile options' })
        );
      });

      await new Promise((r) => setTimeout(r, 1000)); // To account for the timer in the component

      expect(
        screen.getByRole('button', { name: 'Profile options' })
      ).toHaveAttribute('aria-expanded', 'false');

      expect(screen.getByTestId('profile-dropdown')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
    });
  });

  describe('when tab navigating', () => {
    it('should show the log out menu and update accessibility', async () => {
      render(<UserDropdown />);

      await waitFor(() => {
        fireEvent.focus(
          screen.getByRole('button', { name: 'Profile options' })
        );
      });

      expect(
        screen.getByRole('button', { name: 'Profile options' })
      ).toHaveAttribute('aria-expanded', 'true');
    });

    it('should update accessibility when hovering over menu', async () => {
      render(<UserDropdown />);

      await waitFor(() => {
        fireEvent.focus(
          screen.getByRole('button', { name: 'Profile options' })
        );
        fireEvent.focus(screen.getByTestId('profile-dropdown'));
      });

      expect(screen.getByTestId('profile-dropdown')).toHaveAttribute(
        'aria-hidden',
        'false'
      );
    });

    it('should update accessibility when leaving the button', async () => {
      render(<UserDropdown />);

      await waitFor(
        () => {
          fireEvent.focus(
            screen.getByRole('button', { name: 'Profile options' })
          );
          fireEvent.focus(screen.getByTestId('profile-dropdown'));
          fireEvent.focus(screen.getAllByText('Log out')[0]);
          fireEvent.blur(screen.getAllByText('Log out')[0]);
          fireEvent.blur(screen.getByTestId('profile-dropdown'));
          fireEvent.blur(
            screen.getByRole('button', { name: 'Profile options' })
          );
          return new Promise((r) => setTimeout(r, 1000)); // To account for the timer in the component
        },
        { timeout: 8000 }
      );

      expect(
        screen.getByRole('button', { name: 'Profile options' })
      ).toHaveAttribute('aria-expanded', 'false');

      expect(screen.getByTestId('profile-dropdown')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
    });
  });
});
