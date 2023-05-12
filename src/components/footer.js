import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import { RentaflopLink } from "./utils";
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  social_class: {
    height: "35px!important",
    width: "35px!important",
    marginRight: "5px",
    '&:hover': {
      height: "40px!important",
      width: "40px!important",
    },
  },
}));


function Copyright(props) {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center" {...props}>
	{'Copyright © '}
	<RentaflopLink color="inherit" href ="/">
	  rentaflop
	</RentaflopLink>{' '}
	{new Date().getFullYear()}
      </Typography>
    </>
  );
}


const portal_url = "https://portal.rentaflop.com"
const footers = [
  {
    title: 'Company',
    description: ['Home', 'About', "Blog", 'Contact'],
    route: ['/', '/about', '/blog', portal_url+'/contact'],
  },
  {
    title: 'Product',
    description: ['Pricing', 'Rentaflop miner', 'FAQ', 'Support'],
    route: ['/pricing', '/blog/hosting', '/faq', portal_url+'/support'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
    route: [portal_url+'/privacy', portal_url+'/terms'],
  },
];


export default function Footer() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
	borderTop: (theme) => `1px solid ${theme.palette.divider}`,
	mt: 8,
	py: [3, 6],
	textAlign: "center"
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
	{footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
	    </Typography>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              {footer.description.map((item, idx) => (
		<li key={item}>
		  <RentaflopLink href={footer.route[idx]} variant="subtitle1" color="textSecondary">
		    {item}
		  </RentaflopLink>
		</li>
              ))}
	    </ul>
          </Grid>
	))}
      </Grid>
      <div style={{ marginTop: 24 }}>
	<SocialIcon url="https://dsc.gg/rentaflop" network="discord" className={classes.social_class} />
	<SocialIcon url="https://instagram.com/rentaflop" className={classes.social_class} />
	<SocialIcon url="https://twitter.com/rentaflop" className={classes.social_class} />
	<SocialIcon url="https://www.facebook.com/profile.php?id=100088816761556" className={classes.social_class} />
	<SocialIcon url="https://www.linkedin.com/company/rentaflop" className={classes.social_class} />
	{/* NOTE: last icon must override margin-right to 0 */}
	<SocialIcon url="https://www.reddit.com/r/rentaflop/" className={classes.social_class} style={{ marginRight: 0 }} />
      </div>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
	{/* setting height twice because of a css conflict with app.css and index.css */}
	Part of <Image src="/static/ycombinator.svg" height={20.18} width={63.63} style={{ paddingTop: 8, display: "inline", verticalAlign: "baseline", height: 20.18 }} alt="YCombinator logo" /> Startup School
      </Typography>
      <Copyright sx={{ mt: 1 }} />
    </Container>
  );
}
