import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#7B50A8',
          contrastText: '#FFFFFF'
      },
      secondary: {
          main: '#EB7B26',
          contrastText: '#FFFFFF',
      },
      grey: {
          "100": '#F5F5F5',
          "200": '#EEEEEE'
      }
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
        button: {
            fontFamily: "'Poppins', sans-serif",
            textTransform: 'none'
        }
    },
    shape: {
        borderRadius: 25,
    },
});

export default theme;