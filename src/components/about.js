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
	Rentaflop is a crowdsourced cloud provider offering AI practitioners fast and affordable GPU rentals from hardware owners across the globe.
	Build your Deep Learning models without waiting in line to buy a GPU or overpaying on traditional cloud services.
      </Typography>
      <Typography align="left" paragraph>
	You get a Virtual Machine with a GPU tier of your choosing, connected by SSH and Jupyter. It comes packaged with Tensorflow, Keras, and PyTorch
	out of the box. Our <FooterLink href="https://portal.rentaflop.com/faq">tutorial</FooterLink> explains how to get
	started by training your first rentaflop Deep Learning model.
      </Typography>
      <Typography align="left" paragraph>
	For the latest rentaflop news, or to read a variety of things about software development and startups, check out
	our <FooterLink href="/blog">blog</FooterLink>.
      </Typography>
      <Typography align="left" paragraph>
	What are your questions? Please see the <FooterLink href="https://portal.rentaflop.com/faq">faq</FooterLink>.
      </Typography>
    </>
  );
  
  return <RentaflopText title={title} body={body} />
}
