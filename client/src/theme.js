import { createMuiTheme } from '@material-ui/core/styles';

const mont = "'Montserrat, san-serif'";
const cinzel = "'Cinzel', 'serif'";

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#5B685E',
      main: '#5B685E',
      light: '#F2EECA',
    },
    secondary: {
      main: '#789697',
      dark: '#789697',
      light: '#D3E7D8',
    },
  },
  typography: {
    fontFamily: [
      cinzel,
      mont,
    ].join(','),
  },
});

export default theme;
/*
Color Hex Codes:
yellow: #f1edca
lightBlue: #d3e7d8
darkBlue: #789697
gray: #5b685e

*/
