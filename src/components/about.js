import React from 'react';
import { Box, Typography } from '@material-ui/core';


export default function About() {
  return (
    <Box display="flex" flexDirection="column" alignItems="stretch" padding={3}>
      <Typography align="left" paragraph variant="h6">
	Existing hardware solutions for training Deep Learning models are prohibitively expensive for many.
	Building a GPU-powered AI computer costs thousands, and using a cloud provider service like AWS costs hundreds or more per model.
      </Typography>
      <Typography align="left" paragraph variant="h6">
	GPU owners don’t fully utilize their powerful hardware.
	An unimaginable amount of dormant compute is waiting to be used.
      </Typography>
      <Typography align="left" paragraph variant="h6">
	rentaflop allows GPU owners to join a cloud network in which they sell compute time to renters.
	Owners make money with little effort, and renters get powerful hardware at low cost.
      </Typography>
    </Box>
  );
}
