import { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  breakpoints: ['32em', '48em', '64em', '96em', '128em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96, 128, 160, 192],
  radii: {
    small: 4,
    default: 10,
    circle: 99999
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: '"Inter", sans-serif'
  },
  colors: {
    background: {
      primary: '#19171E',
      secondary: '#16141B',
      tertiary: '#343246'
    },
    text: {
      primary: 'hsl(252, 14%, 93%)',
      primaryHighlight: 'hsl(157, 73%, 61%)',
      secondaryHighlight: 'hsl(170, 57%, 50%)',
      offText: 'hsl(240, 3%, 67%)'
    },
    primary: 'hsl(157, 60%, 40%)',
    primaryHover: 'hsl(157, 90%, 30%)',
    secondary: 'hsl(157, 60%, 40%)'
  },
  styles: {
    root: {
      background: 'background.primary'
    }
  },
  buttons: {
    cta: {
      // TODO: replace these rgba with references to the primary/secondary highlight theme colors
      background:
        'linear-gradient(99deg, hsl(157, 73%, 45%) 0%, hsl(157, 60%, 40%) 100%)',
      transition: 'all 0.1s ease-out',
      '&:hover': {
        filter: 'drop-shadow(0px .5px 2px hsl(157, 73%, 45%))'
      },
      '&:active:not(:focus-visible)': {
        transform: 'translateY(1px)',
        filter: 'drop-shadow(0px .5px 5px hsl(157, 73%, 45%))'
      },
      fontWeight: 500
    },
    primary: {
      background: 'primary',
      fontWeight: 500,
      transition: 'all 0.1s ease-in-out',
      '&:hover': {
        background: 'primaryHover'
      },
      '&:active:not(:focus-visible)': {
        filter: 'drop-shadow(0px .5px 2px hsl(157, 73%, 45%))'
      }
    }
  }
});

export type ExactTheme = typeof theme;
