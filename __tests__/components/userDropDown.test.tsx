import { UserDropdown } from '@/components/index';
import { userEvent, render, screen, waitFor } from '../test-utils';

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

    it('should update accessibility when leaving menu', async () => {
      render(<UserDropdown />);

      await waitFor(() => {
        userEvent.hover(
          screen.getByRole('button', { name: 'Profile options' })
        );
        userEvent.hover(screen.getByTestId('profile-dropdown'));
        userEvent.unhover(screen.getByTestId('profile-dropdown'));
      });

      expect(
        screen.getByRole('button', { name: 'Profile options' })
      ).toHaveAttribute('aria-expanded', 'false');
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
