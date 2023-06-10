import React from 'react';
import Header from './header'
import Footer from './footer'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Head from 'next/head'


export default function Page(props) {
  return (
    <>
      {props.title &&
       <Head>
	 <title>
	   {props.title + " | rentaflop | Online Cloud Render Farm"}
	 </title>
	 <meta property="og:description" content={props.description} key="og:description" />
	 <meta name="description" content={props.description} key="description" />
       </Head>
      }
      <ThemeProvider theme={theme}>
	<div className="App" style={{backgroundColor:"#FBFBFB"}}>
	  <CssBaseline />
	  <Header />
	  {props.children}
	  <Footer />
	</div>
      </ThemeProvider>
    </>
  )
}
