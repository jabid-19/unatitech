import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#16151d',
      contrastText: '#fff',
    },

    secondary: {
      main: '#FF5BCA',
      contrastText: '#fff',
    },
    background: {
      default: '#13121a',
    },
  },

  typography: {
    fontFamily: ['Poppins', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },

  // fontColor: 'white',
  // spacing: 8,
})

export default theme
