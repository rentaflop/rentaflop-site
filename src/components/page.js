import React from 'react';
import Header from './header'
import Footer from './footer'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


export default function Page(props) {  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundColor:"#FBFBFB"}}>
	<CssBaseline />
	<Header />
	{props.children}
	<Footer />
      </div>
    </ThemeProvider>
  )
}
