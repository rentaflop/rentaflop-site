import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { styled } from '@mui/system';
import { RentaflopText } from './utils';


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
	Rentaflop is a crowdsourced render farm offering Blender artists fast and affordable rendering from hardware owners across the globe.
	Build your 3D creations without compromising on quality or overpaying on traditional render services.
      </Typography>
      <Typography align="left" paragraph>
	Simply submit your Blender file, along with any assets. We quickly and affordably render your file, giving you the ability to rapidly
	improve your 3D creations without high expenses. For our prices, please see <FooterLink href="https://portal.rentaflop.com/pricing">pricing</FooterLink>.
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
  
  return <RentaflopText title={title} body={body} />
}
