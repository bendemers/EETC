/**
 * A file for defining the global MUI theme used in the project.
 */
import { createTheme } from '@mui/material/styles';
import COLORS from './colors';
import 'typeface-hk-grotesk';

// https://github.com/hack4impact/chapter-website-template/blob/main/public/style.css
const theme = createTheme({
  palette: {
    background: {
      default: '#6E90F6',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      main: '#c7deff',
    },
    secondary: {
      main: '#FFFFFF',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '30px',
      lineHeight: '36px',
      color: '#ffffff',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    h2: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '30px',
      lineHeight: '22px',
      color: '#c7deff',
    },
    subtitle2: {
      color: '#c7deff',
    },
    button: {
      textTransform: 'none',
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '15px',
    },
    fontFamily: [
      'HK Grotesk',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: '15px',
        },
        outlined: {
          borderRadius: '15px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          letterSpacing: '0.3px',
          lineHeight: '1.5',
        },
        h1: {},
        h2: {
          marginBottom: '32px !important',
        },
        h3: {
          fontWeight: 'bold !important',
          marginBottom: '10px',
        },
        h4: {
          fontWeight: 'bold !important',
        },
      },
    },
  },
});

export default theme;
