import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CssBaseline, Grid, Stack, Container, Paper,
	 TableCell, TableRow } from '@material-ui/core';
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
import { ReactComponent as EpilogLogo } from './../static/epilog_logo.svg';
import BlenderApplication from './../static/blender_application.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RentaflopText, RentaflopTable } from './utils';
import TextField from '@mui/material/TextField';


function make_graphic_styles(is_large_screen) {
  const url = is_large_screen ? `url(${Graphic})` : `url(${GraphicMobile})`
  const height = is_large_screen ? "110vh" : "90vh"
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


const intro_cards = [
  {
    "id": 1,
    "primary":
    <Typography gutterBottom variant="h5" component="h2">
      As easy as pie
    </Typography>,
    "secondary":
    <Typography>
      You'll never need to look up graphics card specs again, nor will you have to build and manage your own hardware.
      Rentaflop render farm renders your Blender creations quickly and without hassle, or your money back.
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
      We match low opportunity cost crowdsourced hardware with your high value rendering workloads to save you time and money. Rendering with us is more than 50%
      cheaper than many other rendering services!
    </Typography>,
    // https://upload.wikimedia.org/wikipedia/commons/9/9b/Money_-_Flickr_-_Tracy_O.jpg
    "img": MoneyPile,
  },
  {
    "id": 3,
    "primary":
    <Typography gutterBottom variant="h5" component="h2">
      Take your Blender works to new heights
    </Typography>,
    "secondary":
    <Typography>
      Rentaflop makes it easy to experiment with and tweak your 3D creations. Whether you're a hobbyist and want your work to look professional, or
      a pro who wants to beat the competition, rentaflop allows you to render without sacrificing quality.
    </Typography>,
    // https://upload.wikimedia.org/wikipedia/commons/9/91/Bruce_McCandless_II_during_EVA_in_1984.jpg
    "img": UntetheredSpacewalk,
  },
];
      
const social_cards = [
  {
    "id": 0,
    "img": <EpilogLogo style={{ width: "250px", height: "100px" }}/>,
    "url": "https://www.epiloglaser.com/?ref=rentaflop",
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
  const intro_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Meet rentaflop</Typography>
  const intro_body = <Typography align="left" paragraph paddingTop="24px" />
  // don't autofocus if they've clicked arrow since it brings screen back up on chrome
  const autofocus = !window.location.href.includes("learn");

  const table_title_text = <Typography component="h1" variant="h2" align="left" fontWeight="600" gutterBottom>How rentaflop compares</Typography>
  const table_title = <RentaflopText title={table_title_text} />
  const table_cols = ["Company", "Price", "Fast Rendering Starting Immediately", "Supports Both Cycles and Eevee", "Satisfaction or Money Back", "Data Privacy"];
  const rows = [
    {"id": 0, "company": "rentaflop", "price": "$0.0019 per OBh", "fast": "Yes", "engines": "Yes", "refund": "Yes", "privacy": "Yes"},
    {"id": 1, "company": "GarageFarm", "price": "$0.0050 per OBh, fast tier", "fast": "Yes", "engines": "No", "refund": "No", "privacy": "Yes"},
    {"id": 2, "company": "RebusFarm", "price": "$0.0045 per OBh", "fast": "Yes", "engines": "No", "refund": "Yes", "privacy": "Yes"},
    {"id": 3, "company": "Concierge Render", "price": "$0.0040 per OBh", "fast": "Yes", "engines": "Yes", "refund": "No", "privacy": "Yes"},
    {"id": 4, "company": "Blendergrid", "price": "Determined prior to render", "fast": "Yes", "engines": "No", "refund": "Yes", "privacy": "Yes"},
    {"id": 5, "company": "SheepIt", "price": "Spend points earned from providing computing power", "fast": "No", "engines": "Yes", "refund": "No", "privacy": "No"},
  ];
  const table_body = rows.map((row) => (
    <TableRow key={row.id} style={(row.company === "rentaflop" ? {background: "rgb(220, 233, 241, .5)"} : {})}> 
      <TableCell>{row.company}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>{row.fast}</TableCell>
      <TableCell>{row.engines}</TableCell>
      <TableCell>{row.refund}</TableCell>
      <TableCell>{row.privacy}</TableCell>
    </TableRow>
  ));
  const table_footer = <Typography component="p" variant="p" align="right" color="rgb(128, 128, 128, .5)" sx={{pt: 2}}>Data from 10/05/22</Typography>
  const social_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Trusted for business by</Typography>
  
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
		Don't settle for lower quality work because of high rendering costs.
              </Typography>
              <Typography variant={params.secondary} align="left" color="text.primary">
		Render your Blender creations with rentaflop farm and save thousands.
              </Typography>
	      <form onSubmit={(e) => {
		      e.preventDefault();
		      window.location.href=portal_url+"/register?email="+e.target.email1.value;
		    }}>
		<Grid container paddingTop="12px">
		  <Grid item>
		    <TextField variant="outlined" autoFocus={autofocus} label="Email address" name="email1" size="small" type="email" sx={{ width: { sm: 100, md: 150 } }}/>
		  </Grid>
		  <Grid item alignItems="stretch" style={{ display: "flex", paddingLeft: 15 }}>
		    <Button type="submit" className={classes.cta_button} variant="contained">Start rendering</Button>
		  </Grid>
		</Grid>
	      </form>
            </Container>
          </Box>
	  { is_large_screen &&
	  <HashLink to="/#learn" smooth>
	    <ArrowDownwardIcon style={{ color: textColorDark, fontSize: 225, marginTop: "-35px" }} />
	  </HashLink>
	  }
	</Paper>
	
        <Container sx={{ pt: 4 }} maxWidth="md" id="learn">
	  <RentaflopText title={intro_title} body={intro_body}/>
             <Grid container spacing={2}>
               <Grid item xs={12} sm={6} md={4}>
		 <Card
                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
		 >
                  <CardContent sx={{ flexGrow: 1 }}>
		    <Typography align="left" paragraph paddingTop="24px">
		      Rentaflop is a crowdsourced render farm offering Blender artists fast and affordable rendering from hardware owners across the globe.
		    </Typography>
		    <Typography align="left" paddingTop="12px">
		      Join now and render your Blender creations!
		    </Typography>
		    <form onSubmit={(e) => {
			    e.preventDefault();
			    window.location.href=portal_url+"/register?email="+e.target.email2.value;
			  }}>
		      <Grid container paddingTop="12px">
			<Grid item>
			  <TextField variant="outlined" label="Email address" name="email2" type="email" size="small" sx={{ width: { sm: 100, md: 150 } }}/>
			</Grid>
			<Grid item alignItems="stretch" style={{ display: "flex", paddingLeft: 15 }}>
			  <Button type="submit" className={classes.cta_button} variant="contained">Join</Button>
			</Grid>
		      </Grid>
		    </form>
                  </CardContent>
		 </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={8}>
		 <Card
                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
		 >
		   <CardMedia
		     component="img"
		     image={BlenderApplication}
		     alt="random"
		   />
		 </Card>
               </Grid>
             </Grid>
	</Container>
	
	<RentaflopTable title={table_title} cols={table_cols} body={table_body} footer={table_footer} />
        <Stack
          sx={{ pt: 0, pb: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button href={portal_url+"/register"} className={classes.cta_button} variant="contained">Render now</Button>
          <Button component={Link} to="/about" className={classes.button_style} variant="contained">Learn more</Button>
        </Stack>
	
        <Container sx={{ pt: 4 }} maxWidth="md">
          <Grid container spacing={4} id="intro-cards">
            {intro_cards.map((card) => (
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
	     
	  <RentaflopText title={social_title} padding={"64px"} />
             <Grid container spacing={4} id="social">
               {social_cards.map((card) => (
		 <Grid item key={card.id} xs={12} sm={6} md={4}>
		   <a href={card.url}>{card.img}</a>
		 </Grid>
		     ))}
		</Grid>
          <Stack
            sx={{ pt: 0, pb: 3 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button href={portal_url+"/register"} className={classes.cta_button} variant="contained">Render your work</Button>
            <Button component={Link} to="/about" className={classes.button_style} variant="contained">Learn more</Button>
          </Stack>
        </Container>
      </main>
    </>
  );
}
