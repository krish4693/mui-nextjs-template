import { PaletteMode } from "@mui/material";

const theme = {
  palette: {
    primary: {
      main: "#2196F3", // Blue
    },
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Palette values for light mode
          primary: {
            main: "#2196F3", // Blue
          },
          secondary: {
            main: "#F06292", // Pink
          },
          divider: "#E0E0E0", // Light Grey
          background: {
            default: "#F5F5F5", // Very Light Grey
            paper: "#FFFFFF", // White
          },
          text: {
            primary: "#212121", // Dark Grey
            secondary: "#757575", // Medium Grey
          },
        }
      : {
          // Palette values for dark mode
          primary: {
            main: "#3F51B5", // Indigo
          },
          secondary: {
            main: "#F48FB1", // Light Pink
          },
          divider: "#424242", // Dark Grey
          background: {
            default: "#303030", // Very Dark Grey
            paper: "#424242", // Dark Grey
          },
          text: {
            primary: "#FFFFFF", // White
            secondary: "#BDBDBD", // Light Grey
          },
        }),
  },
});

export default theme;
