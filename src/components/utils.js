import React from 'react';
import { Container, CssBaseline, createTheme, ThemeProvider, Divider } from '@mui/material';


export function https_log(log, log_level) {
  var logApiUrl = 'https://portal.rentaflop.com/api/log'
  fetch(logApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "message": log, "level": log_level })
  });
} 


const rentaflop_text_theme = createTheme();


export function RentaflopText(props) {
  const title = props.title;
  const body = props.body;

  return (
    <ThemeProvider theme={rentaflop_text_theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{paddingTop: "24px", textAlign: "left"}}>
	<main>
	  { title }
	  <Divider/>
	  { body }
	</main>
      </Container>
    </ThemeProvider>
  );
}
