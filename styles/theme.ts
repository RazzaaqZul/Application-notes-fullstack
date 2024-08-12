/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  ...chakraTheme.fonts,
  body: ``,
};

const overrides = {
  ...chakraTheme,
};

const customTheme = extendTheme(overrides);

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
});

export default customTheme;
