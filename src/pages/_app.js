import React from 'react';
import Script from 'next/script';
// import '../index.css'
import '../App.css';
import Head from 'next/head'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
	<meta charSet="utf-8" />
	<meta
	  name="viewport"
	  content="minimum-scale=1, initial-scale=1, width=device-width"
	/>
	<meta name="theme-color" content="#000000" />
	{/* if modified, update portal _app.js and blog/[slug].js */}
	<title>rentaflop</title>
	<meta property="og:title" content="rentaflop" key="og:title" />
	{/* intentionally omitted since it's tough to get url from here
	    <meta property="og:url" content={"https://portal.rentaflop.com/blog/"+post.slug.replace(/\.md$/, '')} /> 
	 */}
	<meta property="og:image" content="https://rentaflop.com/static/rentaflop_logo.png" key="og:image" />
	<meta property="og:type" content="website" key="og:type" />
	<meta property="og:description" content="Fast and affordable Blender 3D rendering" key="og:description" />
	<meta property="description" content="Fast and affordable Blender 3D rendering" key="description" />

	{/*
	   Google tag (gtag.js)
	 */}
	<Script src="https://www.googletagmanager.com/gtag/js?id=G-FKBK6XSRHB" strategy="afterInteractive" />
	<Script id="google-analytics" strategy="afterInteractive">
	  {`
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('set', 'linker', {
	    'domains': ['rentaflop.com', 'portal.rentaflop.com']
	  });
	  gtag('js', new Date());

	  gtag('config', 'G-FKBK6XSRHB');
        `}
	</Script>
      <Script type="text/javascript" strategy="afterInteractive">
	{`
	// Single Page Apps for GitHub Pages
	// MIT License
	// https://github.com/rafgraph/spa-github-pages
	// This script checks to see if a redirect is present in the query string,
	// converts it back into the correct url and adds it to the
	// browser's history using window.history.replaceState(...),
	// which won't cause the browser to attempt to load the new url.
	// When the single page app is loaded further down in this file,
	// the correct url will be waiting in the browser's history for
	// the single page app to route accordingly.
	(function(l) {
          if (l.search[1] === '/' ) {
            var decoded = l.search.slice(1).split('&').map(function(s) { 
              return s.replace(/~and~/g, '&')
            }).join('?');
            window.history.replaceState(null, null,
					l.pathname.slice(0, -1) + decoded + l.hash
				       );
          }
	}(window.location))
        `}
      </Script>
      
    </Head>

    <Component {...pageProps} />
    {/* hubspot messaging */}
    <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/23808232.js" strategy="afterInteractive"></Script>
    </>
  );
}
