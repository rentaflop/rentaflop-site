import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CssBaseline, Grid, Stack, Container, Paper } from '@material-ui/core';
import theme from '../theme';
import { makeStyles } from '@material-ui/styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import UntetheredSpacewalk from './../static/untethered_spacewalk.jpg';
import MoneyPile from './../static/money_pile.jpg';
import Pie from './../static/pie.jpg';
import Graphic from './../static/rocket_graphic.svg';
import GraphicMobile from './../static/rocket_graphic_mobile.svg';
import useMediaQuery from '@mui/material/useMediaQuery';


function make_graphic_styles(is_large_screen) {
  const url = is_large_screen ? `url(${Graphic})` : `url(${GraphicMobile})`
  const height = is_large_screen ? "100vh" : "90vh"
  const styles = {
    paperContainer: {
      backgroundImage: url,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "100%",
      height: height,
      borderRadius: 0,
      boxShadow: "none",
      backgroundColor: "rgb(251,251,251)"
    }
  };

  return styles;
}


const cards = [
  {
    "id": 1,
    "primary":
    <Typography gutterBottom variant="h5" component="h2">
      As easy as pie
    </Typography>,
    "secondary":
    <Typography>
      You'll never need to look up graphics card specs again; rentaflop renders your Blender creations quickly and without hassle, or your money back
    </Typography>,
    // https://upload.wikimedia.org/wikipedia/commons/1/1e/Pie_day_apple_pie.jpg
    "img": Pie,
  },
  {
    "id": 2,
    "primary":
    <Typography gutterBottom variant="h5" component="h2">
      Harness the power of 3D creation without breaking the bank
    </Typography>,
    "secondary":
    <Typography>
      We match low opportunity cost hardware with your high value rendering workloads to save you money
    </Typography>,
    // https://upload.wikimedia.org/wikipedia/commons/9/9b/Money_-_Flickr_-_Tracy_O.jpg
    "img": MoneyPile,
  },
  {
    "id": 3,
    "primary":
    <Typography gutterBottom variant="h5" component="h2">
      Take your Blender project to new heights
    </Typography>,
    "secondary":
    <Typography>
      Rentaflop render farm makes it easy to experiment with and tweak your 3D creations
    </Typography>,
    // https://upload.wikimedia.org/wikipedia/commons/9/91/Bruce_McCandless_II_during_EVA_in_1984.jpg
    "img": UntetheredSpacewalk,
  },
];

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
  const is_large_screen = useMediaQuery('(min-width:600px)');
  const params_large = {
    "primary": "h1",
    "secondary": "h4"
  }
  const params_small = {
    "primary": "h3",
    "secondary": "h6"
  }
  const params = is_large_screen ? params_large : params_small;
  
  return (
    <>
      <CssBaseline />
      <main>
	<Paper style={make_graphic_styles(is_large_screen)["paperContainer"]}>
          <Box
            sx={{
              pt: "7%", // 12
	      pl: "5%",
	      pr: "33%", // 40
	      float: "left",
	      width: "100%",
            }}
          >
            <Container maxWidth="xl">
              <Typography
		component="h1"
		variant={params.primary}
		align="left"
		color="text.primary"
		gutterBottom
              >
		Fast and affordable 3D rendering
              </Typography>
              <Typography variant={params.secondary} align="left" color="text.primary">
		Don't settle for lower quality creations because of high rendering costs.
              </Typography>
              <Typography variant={params.secondary} align="left" color="text.primary">
		Launch your Blender projects with rentaflop farm and save thousands.
              </Typography>
            </Container>
          </Box>
	  { is_large_screen &&
	  <HashLink to="/#learn" smooth>
	    <ArrowDownwardIcon style={{ color: textColorDark, fontSize: 225, marginTop: "-35px" }} />
	  </HashLink>
	  }
	</Paper>
        <Container sx={{ pt: 4 }} maxWidth="md">
          <Grid container spacing={4} id="learn">
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={card.img}
                    alt="random"
		    sx={{ pt: "20%", height: '300px' }} // 394px
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
		    {card.primary}
		    {card.secondary}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
	  {/* TODO how it works section? */}
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button href={portal_url+"/launchpad"} className={classes.cta_button} variant="contained">Render your project now</Button>
            <Button component={Link} to="/about" className={classes.button_style} variant="contained">Learn more</Button>
          </Stack>
        </Container>
      </main>
    </>
  );
}
