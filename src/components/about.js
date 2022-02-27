import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { styled } from '@mui/system';
import { https_log } from './utils';


const FooterLink = styled(Link)({
  textDecoration: "none",
  '&:hover': {
    textDecoration: "underline",
  },
});


export default function About() {
  https_log("User hit about page", "INFO")
  
  return (
    <Box display="flex" flexDirection="column" alignItems="stretch" padding={3}>
      <Typography align="left" paragraph variant="h6">
	Rentaflop is a startup that connects AI hobbyists with affordable GPU rentals supplied by crypto miners.
	Crypto miners get higher returns on their hardware, and AI hobbyists avoid breaking the bank on their Deep Learning projects.
      </Typography>
      <Typography align="left" paragraph variant="h6">
	Existing hardware solutions for training Deep Learning models are prohibitively expensive for many.
	Building a GPU-powered AI computer costs thousands and often involves camping overnight at Best Buy.
	Using a cloud provider service like AWS costs hundreds or more per model.
      </Typography>
      <Typography align="left" paragraph variant="h6">
	By matching low opportunity cost hardware with high value compute jobs, rentaflop lowers the cost curve
	for AI and raises crypto mining returns.
      </Typography>
      <Typography align="left" paragraph variant="h6">
	If you'd like to learn more, see the <FooterLink href="https://portal.rentaflop.com/faq" color="text.secondary">faq</FooterLink>.
      </Typography>
    </Box>
  );
}
