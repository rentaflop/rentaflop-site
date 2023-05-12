import React, { useEffect } from 'react';
import Header from './header'
import Footer from './footer'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { useRouter } from 'next/router'
import { https_log } from './utils'


export default function BlogPage(props) {
  const router = useRouter();
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      var log = "User hit "+router.asPath;
      log = (window.innerWidth > 768) ? log : log+" from mobile device";
      https_log(log, "INFO");
    }
  }, []);
  
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
