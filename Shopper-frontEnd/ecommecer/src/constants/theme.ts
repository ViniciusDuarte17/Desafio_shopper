import { createTheme } from '@mui/material/styles';
import { primary, secondary, tertiary } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: tertiary
    }
  },
});

export default theme;