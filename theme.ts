import { Theme } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
  colors: {
    background: {
      primary: "#19171E",
      secondary: "#16141B",
      tertiary: "#343246",
    },
    text: {
      primary: "#FFFFFF",
      primaryHighlight: "#51E4AB",
      secondaryHighlight: "#36C8AF",
      offText: "#A8A8AD",
    },
    primary: "#51E4AB",
    secondary: "#36C8AF",
  },
  styles: {
    root: {
      background: "background.primary",
    },
  },
  buttons: {
    primary: {
      // TODO: replace these rgba with references to the primary/secondary highlight theme colors
      background:
        "linear-gradient(99deg, rgba(54,200,175,1) 0%, rgba(81,228,171,1) 100%)",
      "&:hover": {
        filter: "drop-shadow(0px .5px 2px #36C8AF)",
      },
      "&:active": {
        background:
          "linear-gradient(99deg,rgba(81,228,171,1)  0%, rgba(54,200,175,1) 100%)",
      },
    },
  },
});

export type ExactTheme = typeof theme;
