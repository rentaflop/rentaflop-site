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
      <Typography component="h2" variant="h6" align="left" fontWeight="600" paddingTop="24px" gutterBottom>
	Rentaflop helps 3D artists render animations faster and cheaper
      </Typography>
      <Typography align="left" paragraph>
	Have your ever lowered the samples or resolution to meet a deadline? It's frustrating.
	Rentaflop render farm puts underutilized hardware to work rendering your projects so you can create animations without sacrificing quality.
	Our on-demand, cloud rendering service leverages graphics cards across the globe to give you fast and affordable rendering.
	You'll never have to worry about meeting your deadline or budget again!
      </Typography>
      <Typography component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>
	Why we're unique
      </Typography>
      <Typography align="left" paragraph>
	We're the only render farm that pays hardware providers around the world to render your work. Millions of underutilized graphics cards represent
	untapped potential for helping animators render their work faster and cheaper. When you render with rentaflop, you can either tap into these
	resources for maximum savings or utilize our own and trusted partners' hardware for added security.
      </Typography>
      <Typography component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>
	How it works
      </Typography>
      <Typography align="left" paragraph>
	Like other render farms, but better. Simply upload your project, along with any assets. Our price calculator gives you the exact render price,
	render time estimate,
	and a few sample frames for free! When you're ready to run the full rendering, we quickly and affordably render your work, giving you the ability to rapidly
	improve your 3D creations without high expenses. Whether you're a studio or freelance artist, rentaflop helps you meet deadlines and lower costs
	to outperform your competitors.
      </Typography>
      <Typography component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>
	Learn more
      </Typography>
      <Typography align="left" paragraph>
	To learn more about how we render your work, check out
	the <FooterLink href="/rendering">rendering</FooterLink> page.	
	To read about our pricing tiers and security levels, please see <FooterLink href="/pricing">pricing</FooterLink>.
      </Typography>
      <Typography align="left" paragraph>
	If you have an Nvidia graphics card and would like to make money without lifting a finger, please read
	about <FooterLink href="/blog/hosting">becoming a host</FooterLink>.
	Your hardware can pay for itself while helping 3D artists render their projects.
      </Typography>
      <Typography align="left" paragraph>
	For the latest rentaflop news, or to read a variety of things about software development and startups, check out
	our <FooterLink href="/blog">blog</FooterLink>.
      </Typography>
      <Typography align="left" paragraph>
	What are your questions? Please see the <FooterLink href="/faq">faq</FooterLink>.
      </Typography>
    </>
  );
  
  return (
    <Page>
      <RentaflopText title={title} body={body} />
    </Page>
  );
}
