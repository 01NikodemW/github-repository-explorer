import type { Theme } from "@mui/material";
import { createTheme as createMuiTheme } from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    smallPhone: true;
    phone: true;
    smallTablet: true;
    tablet: true;
    desktop: true;
    largeDesktop: true;
  }
}

export const createTheme = (): Theme => {
  let theme = createMuiTheme(baseThemeOptions);

  return theme;
};
