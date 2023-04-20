import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { styled } from '@mui/system';
import { RentaflopText } from '../components/utils';
import Page from '../components/page'


const FooterLink = styled(Link)({
  textDecoration: "none",
  '&:hover': {
    textDecoration: "underline",
  },
});


export default function About() {
  const title = <Typography component="h1" variant="h4" align="center" fontWeight="600" gutterBottom>About Us</Typography>
  const body = (
    <>
      <Typography align="left" paragraph paddingTop="24px">
	Rentaflop helps 3D artists render animations faster and cheaper.
	Have your ever lowered the samples or resolution to meet a deadline? It's frustrating.
	Rentaflop puts underutilized hardware to work rendering your projects so you can create animations without sacrificing quality.
      </Typography>
      <Typography align="left" paragraph>
	Simply upload your project, along with any assets. We quickly and affordably render your work, giving you the ability to rapidly
	improve your 3D creations without high expenses. Whether you're a studio or freelance artist, rentaflop helps you meet deadlines and lower costs
	to outperform your competitors.
      </Typography>
      <Typography align="left" paragraph>
	To learn more about how we render your work, check out
	the <FooterLink href="https://portal.rentaflop.com/rendering">rendering</FooterLink> page.	
	To read about our pricing tiers and security levels, please see <FooterLink href="https://portal.rentaflop.com/pricing">pricing</FooterLink>.
      </Typography>
      <Typography align="left" paragraph>
	If you have an Nvidia graphics card and would like to make money without lifting a finger, please read
	about <FooterLink href="https://portal.rentaflop.com/blog/hosting">becoming a host</FooterLink>.
	Your hardware can pay for itself while helping 3D artists render their projects.
      </Typography>
      <Typography align="left" paragraph>
	For the latest rentaflop news, or to read a variety of things about software development and startups, check out
	our <FooterLink href="https://portal.rentaflop.com/blog">blog</FooterLink>.
      </Typography>
      <Typography align="left" paragraph>
	What are your questions? Please see the <FooterLink href="https://portal.rentaflop.com/faq">faq</FooterLink>.
      </Typography>
    </>
  );
  
  return (
    <Page>
      <RentaflopText title={title} body={body} />
    </Page>
  );
}
