import React from 'react';
import Header from './header'
import Footer from './footer'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Head from 'next/head'
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';
import { LoadingBackdrop } from './utils'

export default function Page(props) {
  const { client } = useClientAsyncInit(
    "client-g5bmXulJCpaBSaOjge4VVYUGr5gG18ISI5Woizx4oK7",
    { userID: "rentaflop-site" }, 
    { plugins: [ new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin() ] },
  );

  return (
    <>
      {props.title &&
       <Head>
	 <title>
	   {props.title + " | rentaflop | Blender Render Farm"}
	 </title>
	 <meta property="og:description" content={props.description} key="og:description" />
	 <meta name="description" content={props.description} key="description" />
       </Head>
      }
      <StatsigProvider client={client} loadingComponent={<LoadingBackdrop />}>
	<ThemeProvider theme={theme}>
	  <div className="App" style={{backgroundColor:"#FBFBFB"}}>
	    <CssBaseline />
	    <Header />
	    {props.children}
	    <Footer />
	  </div>
	</ThemeProvider>
      </StatsigProvider>
    </>
  )
}
