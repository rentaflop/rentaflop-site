import React, { useEffect } from 'react';
import Header from './header'
import Footer from './footer'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Router from 'next/router'
import { https_log } from './utils'
import Head from 'next/head'


export default function Page(props) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var log = "User hit "+Router.pathname;
      log = (window.innerWidth > 768) ? log : log+" from mobile device";
      https_log(log, "INFO");
    }
  }, []);
  
  return (
    <>
      {props.title &&
       <Head>
	 <title>
	   {props.title + " | rentaflop | Cloud Render Farm"}
	 </title>
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
