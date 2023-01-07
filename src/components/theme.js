import { createTheme } from '@material-ui/core/styles';
import { grey } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { blue } from '@mui/material/colors';  


const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      light: grey[400],
    },
    secondary: {
      main: orange[500],
    },
    info: {
      main: blue[300],
    },
    text: {
      light: "#FBFBFB",
      mid: grey[400],
      dark: grey[800],
    },
    /* gradient tilted 45 degrees towards bottom right,
       starting reddish-pink, fading out at 50% of its length,
       and finishing theme orange */
    gradient: "linear-gradient(-45deg, rgb(255, 167, 38) 50%, rgb(255, 95, 109))",
    gradient_hover: "linear-gradient(-45deg, rgb(255, 152, 0) 50%, rgb(255, 31, 50))",
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiSwitch: {
      // switchBase: {
      //   // Controls default (unchecked) color for the thumb
      //   color: "#ccc"
      // },
      colorSecondary: {
        "&$checked": {
          // Controls checked color for the thumb
          color: blue[300]
        }
      },
      track: {
      //   // Controls default (unchecked) color for the track
      //   opacity: 0.2,
      //   backgroundColor: "#fff",
        "$checked$checked + &": {
          // Controls checked color for the track
          opacity: 0.5,
          backgroundColor: blue[300]
        }
      }
    }
  }
});

export default theme;
