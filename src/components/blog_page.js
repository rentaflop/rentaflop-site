import React from 'react';
import Header from './header'
import Footer from './footer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


export default function BlogPage(props) {
  return (
      <div style={{backgroundColor:"#FBFBFB"}}>
	<ThemeProvider theme={theme}>
	  <Header authed={false} />
	</ThemeProvider>
	{props.children}
	<Footer />
      </div>
  )
}
