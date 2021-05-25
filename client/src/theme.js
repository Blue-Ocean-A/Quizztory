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
    text: {
      primary: '#5B685E',
      secondary: '#F2EECA',
    },
  },
  typography: {
    fontFamily: [
      cinzel,
      mont,
    ].join(','),
    h1: {
      fontSize: '4rem',
      color: '#5B685E',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      color: '#F2EECA',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#5B685E',
    },
    h4: {
      fontSize: '1rem',
      color: '#5B685E',
      fontFamily: 'Montserrat, san-serif',
    },
    h5: {
      fontSize: '0.8rem',
      color: '#5B685E',
      fontFamily: 'Montserrat, san-serif',
    },
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
