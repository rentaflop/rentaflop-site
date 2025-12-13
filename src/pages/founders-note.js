import React from 'react';
import { Box, Typography, CssBaseline, Container, Paper } from '@material-ui/core';
import Page from '../components/page';
import Head from 'next/head';

export default function FoundersNote() {
  return (
    <Page>
      <Head>
        <title>Rentaflop - A Note from the Founder</title>
        <meta name="description" content="After a successful and profitable run serving the 3D community, Rentaflop has completed its mission." />
      </Head>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            pt: 8,
            pb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              A Note from the Founder
            </Typography>

            <Typography
              variant="h6"
              align="center"
              color="textPrimary"
              paragraph
              sx={{ mt: 3 }}
            >
              After a successful and profitable run serving the 3D community, Rentaflop has completed its mission.
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="textPrimary"
              paragraph
              sx={{ mt: 2 }}
            >
              We are proud to have built a global, distributed supercomputer that helped artists render
              millions of frames faster and cheaper. A huge thank you to our users and GPU hosts who made
              this scalable architecture possible.
            </Typography>

            <Box sx={{ mt: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Stay in Touch
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="textSecondary"
              >
                To contact the founder, use the following email address:
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="primary"
                sx={{ mt: 2, fontWeight: 500 }}
              >
                david at rentaflop dot com
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Page>
  );
}
