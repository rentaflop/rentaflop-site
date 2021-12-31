import React from 'react';
import { Box, Typography, Button, Card, CardActions, CardMedia, CardContent, CssBaseline, Grid, Stack, Container } from '@material-ui/core';
import theme from '../theme';
import { makeStyles } from '@material-ui/styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const cards = [1, 2, 3];
const textColorLight = theme.palette.text.light;
const textColorDark = theme.palette.text.dark;
const gradient = theme.palette.gradient;
const gradient_hover = theme.palette.gradient_hover;
const useStyles = makeStyles((theme) => ({
  button_style: {
    backgroundColor: "rgba(251, 251, 251, .2)!important",
    color: textColorDark + "!important",
    '&:hover': {
      backgroundColor: "rgba(251, 251, 251, .4)!important",
    },
    textTransform: 'none!important',
    borderRadius: "50px!important",
  },
  cta_button: {
    background: gradient,
    color: textColorLight + "!important",
    '&:hover': {
      background: gradient_hover,
    },
    borderRadius: "50px!important",
  },
}));


export default function Home() {
  const classes = useStyles();
  const portal_url = "https://portal.rentaflop.com";
  
  return (
    <>
      <CssBaseline />
      <main>
        <Box
          sx={{
            pt: "12%",
	    pl: "5%",
	    pr: "40%",
	    float: "left",
	    width: "100%",
          }}
        >
          <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="text.primary"
              gutterBottom
            >
              The playground for AI hobbyists
            </Typography>
            <Typography variant="h5" align="left" color="text.secondary" paragraph>
	      Harness the power of Deep Learning quickly and affordably.
            </Typography>
          </Container>
        </Box>
	<HashLink to="/#learn" smooth>
	  <ArrowDownwardIcon style={{ color: textColorDark, fontSize: 225 }} />
	</HashLink>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4} id="learn">
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
		      pt: "20%",
                      // 16:9
                      // pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Take your Deep Learning project to new heights
                    </Typography>
                    <Typography>
		      rentaflop managed GPUs make it easy to experiment, train, and tune your model
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button href={portal_url+"/launchpad"} className={classes.cta_button} variant="contained">Launch your first GPU free</Button>
            <Button component={Link} to="/about" className={classes.button_style} variant="contained">Learn more</Button>
          </Stack>
        </Container>
      </main>
    </>
  );
}
