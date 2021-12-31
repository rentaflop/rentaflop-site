import React from 'react';
import { Typography, Grid, Container, Link } from '@material-ui/core';
import { styled } from '@mui/system';


const FooterLink = styled(Link)({
  textDecoration: "none",
  '&:hover': {
    textDecoration: "underline",
  },
});


function Copyright(props) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
	<FooterLink color="inherit" href="/">
      rentaflop
    </FooterLink>{' '}
    {new Date().getFullYear()}
    </Typography>
  );
}


const home_url = "https://rentaflop.com"
const portal_url = "https://portal.rentaflop.com"
const footers = [
  {
    title: 'Company',
    description: ['Home', 'About', "Blog", 'Contact'],
    route: [home_url, home_url+'/about', '/', '/contact'],
  },
  {
    title: 'Product',
    description: ['Pricing', 'Tutorial', 'FAQ', 'Support'],
    route: [portal_url+'/launchpad', '/', home_url+'/faq', portal_url+'/support'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    route: ['/', '/'],
  },
];


export default function Footer() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
	borderTop: (theme) => `1px solid ${theme.palette.divider}`,
	mt: 8,
	py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
	{footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
	    </Typography>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              {footer.description.map((item, idx) => (
		<li key={item}>
		  <FooterLink href={footer.route[idx]} variant="subtitle1" color="text.secondary">
		    {item}
		  </FooterLink>
		</li>
              ))}
	    </ul>
          </Grid>
	))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
