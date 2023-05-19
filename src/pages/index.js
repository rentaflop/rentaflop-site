import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CssBaseline, Grid, Stack, Container, Paper,
	 TableCell, TableRow, Link as MuiLink } from '@material-ui/core';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// const Graphic = React.lazy(() => import('../../public/static/rocket_graphic.avif'));
// const GraphicMobile = React.lazy(() => import('../../public/static/rocket_graphic_mobile.avif'));
// converted by https://cdkm.com/svg-to-avif; TODO this loads both images on page load, see if we can do better
import Graphic from '../../public/static/rocket_graphic.avif';
import GraphicMobile from '../../public/static/rocket_graphic_mobile.avif';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RentaflopText, RentaflopTable, RentaflopButton } from '../components/utils';
import theme from '../components/theme';
import TextField from '@mui/material/TextField';
import Page from '../components/page'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from "@mui/material/styles";
import BoltIcon from '@mui/icons-material/Bolt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { yellow } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { lightBlue } from '@mui/material/colors'
import Carousel from 'react-material-ui-carousel'
import Head from 'next/head'


const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

function make_graphic_styles(is_large_screen) {
  const url = is_large_screen ? `url(${Graphic.src})` : `url(${GraphicMobile.src})`
  const dest = is_large_screen ? Graphic.src : GraphicMobile.src
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

  return [styles, dest];
}

const portal_url = "https://portal.rentaflop.com";

const FooterLink = styled(MuiLink)({
  textDecoration: "none",
  '&:hover': {
    textDecoration: "underline",
  },
});

const intro_cards = [
  {
    "id": 0,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Blazing fast render speed
    </Typography>,
    "secondary":
    <Typography>
      Meet all your deadlines with ease. Our many GPU machines across the globe render what would take days in a matter of hours.
    </Typography>,
    "icon":
    <BoltIcon style={{ color: yellow[300], fontSize: 50 }} />
  },
  {
    "id": 1,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Industry leading prices
    </Typography>,
    "secondary":
    <Typography>
      Underutilized hardware around the world renders your work to save you money. Save up to 90%
      compared to other render farms!
    </Typography>,
    "icon":
    <AttachMoneyIcon style={{ color: green[800], fontSize: 50 }} />
  },
  {
    "id": 2,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Data security and privacy
    </Typography>,
    "secondary":
    <Typography>
      Your work is encrypted upon upload and when placed on rendering machines. Our security tiers provide added options for your privacy needs.
    </Typography>,
    "icon":
    <SecurityIcon style={{ color: blue[800], fontSize: 50 }} />
  },
  {
    "id": 3,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      24/7 rendering with fast support
    </Typography>,
    "secondary":
    <Typography>
      Render any time you want. If you need help, you can email or live chat us and get support typically in minutes, even on weekends and holidays.
    </Typography>,
    "icon":
    <ScheduleIcon style={{ color: blue[300], fontSize: 50 }} />
  },
  {
    "id": 4,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Satisfaction or your money back
    </Typography>,
    "secondary":
    <Typography>
      We take the risk and uncertainty out of rendering. We think you'll love rentaflop, but if you're not satisfied for any reason, we'll refund you.
    </Typography>,
    "icon":
    <VolunteerActivismIcon style={{ color: green[300], fontSize: 50 }} />
  },
  {
    "id": 5,
    "primary":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Smarter rendering transparency
    </Typography>,
    "secondary":
    <Typography>
      Know everything you need to about your render. Try our free price calculator to get a render time estimate, sample frames, and an exact price quote.
    </Typography>,
    "icon":
    <SchoolIcon style={{ color: orange[800], fontSize: 50 }} />
  },
];
      
const software_cards = [
  {
    "id": 0,
    "name":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      3DS MAX
    </Typography>,
    "engines":
    <>
      <Typography>
	Render engines:
      </Typography>
      <Typography>
	V-Ray
      </Typography>
      <Typography gutterBottom>
	Arnold
      </Typography>
    </>,
    "logo":
    <Image src="./static/max_logo.svg" height={100} width={100} style={{ paddingTop: 8, display: "inline", verticalAlign: "baseline", height: 100,
									}} alt="3DS Max logo" />
  },
  {
    "id": 1,
    "name":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      MAYA
    </Typography>,
    "engines":
    <>
      <Typography>
	Render engines:
      </Typography>
      <Typography>
	V-Ray
      </Typography>
      <Typography>
	Arnold
      </Typography>
      <Typography gutterBottom>
	Redshift
      </Typography>
    </>,
    "logo":
    <Image src="./static/maya_logo.svg" height={100} width={100} style={{ paddingTop: 8, display: "inline", verticalAlign: "baseline", height: 100,
									}} alt="Maya logo" />
  },
  {
    "id": 2,
    "name":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      CINEMA 4D
    </Typography>,
    "engines":
    <>
      <Typography>
	Render engines:
      </Typography>
      <Typography>
	V-Ray
      </Typography>
      <Typography>
	Arnold
      </Typography>
      <Typography gutterBottom>
	Redshift
      </Typography>
    </>,
    "logo":
    <Image src="./static/c4d_logo.svg" height={100} width={100} style={{ paddingTop: 8, display: "inline", verticalAlign: "baseline", height: 100,
									}} alt="Cinema 4D logo" />
  },
  {
    "id": 3,
    "name":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      BLENDER
    </Typography>,
    "engines":
    <>
      <Typography>
	Render engines:
      </Typography>
      <Typography>
	Cycles
      </Typography>
      <Typography gutterBottom>
	Eevee
      </Typography>
    </>,
    "logo":
    <Image src="./static/blender_logo.svg" height={100} width={100} style={{ paddingTop: 8, display: "inline", verticalAlign: "baseline", height: 100,
									}} alt="Blender logo" />
  },
  {
    "id": 4,
    "name":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Missing your software?
    </Typography>,
    "engines":
      <Typography gutterBottom>
	<FooterLink href="mailto:support@rentaflop.com" color={lightBlue[600]} >Contact us</FooterLink> so we can add it!
    </Typography>,
    "logo":
    <QuestionMarkIcon style={{ color: grey[500], fontSize: 100 }} />
  },
]

const business_cards = [
  {
    "id": 0,
    "img": <Image src={"./static/epilog_logo.svg"} alt={"Epilog laser is a happy rentaflop customer"} width={250} height={100} />,
    "url": "https://www.epiloglaser.com/?ref=rentaflop",
  },
  {
    "id": 1,
    "img": <Image src={"./static/cgc_logo.svg"} alt={"Rentaflop partners with CG Cookie"} width={250} height={100} />,
    "url": "https://www.cgcookie.com/?ref=rentaflop",
  },
  {
    "id": 2,
    "img": <Image src={"./static/vliani_logo_cropped.png"} alt={"Vliani had an excellent experience with rentaflop"} width={250} height={100} />,
    "url": "https://rentaflop.com",
  },
];

const social_cards = [
  {
    "id": 0,
    "author":
    <Typography gutterBottom variant="h6" component="h2">
      <span style={{ fontWeight: "bold" }} >Bryan Weathers</span> - 3D Artist with Epilog Laser
    </Typography>,
    "quote":
    <Typography align="left" gutterBottom>
      "I'm impressed with how well your service has handled some of the larger renders we've sent your way; some of the Epilog Blender files are quite
      bulky and have really high memory usage that nearly bring my personal computer to a crawl, especially with some at 6k resolution, but you've handled
      it wonderfully."
    </Typography>,
  },
  {
    "id": 1,
    "author":
    <Typography gutterBottom variant="h6" component="h2">
      <span style={{ fontWeight: "bold" }} >Dylan-B Tierney</span> - UX Designer at Vliani
    </Typography>,
    "quote":
    <Typography align="left" gutterBottom>
      "The experience was brilliant. Overall amazing & saved me a bunch of time, definitely will recommend you guys & I'll be using you again in the future."
    </Typography>,
  },
];

const tutorial_cards = [
  {
    "id": 0,
    "step":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Step 1
    </Typography>,
    "instruction":
    <Typography gutterBottom>
      Register and upload your work to our cloud render farm.
    </Typography>,
    "icon":
    <CloudUploadIcon style={{ color: green[500], fontSize: 50 }} />
  },
  {
    "id": 1,
    "step":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Step 2
    </Typography>,
    "instruction":
    <Typography gutterBottom>
      Calculate price (optional) and launch your render.
    </Typography>,
    "icon":
    <RocketLaunchIcon style={{ color: orange[500], fontSize: 50 }} />
  },
  {
    "id": 2,
    "step":
    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
      Step 3
    </Typography>,
    "instruction":
    <Typography gutterBottom>
      Download your result once rendering is complete.
    </Typography>,
    "icon":
    <CloudDownloadIcon style={{ color: blue[500], fontSize: 50 }} />
  },
];


export default function Home() {
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
  const benefits_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Why render with us?</Typography>
  const benefits_body = <Typography align="left" paragraph paddingTop="24px" />
  let autofocus = true;
  // client-side-only code, so must check if window defined first
  if (typeof window !== "undefined") {
    // don't autofocus if they've clicked arrow since it brings screen back up on chrome
    autofocus = !window.location.href.includes("learn");
  }

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
  const tutorial_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>How it works</Typography>
  const business_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Trusted for business by</Typography>
  const social_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>What our customers say</Typography>
  const textColorDark = theme.palette.text.dark;
  const [graphic_style, graphic_url] = make_graphic_styles(is_large_screen);
  
  return (
    <Page>
      <Head> 
	<link rel="preload" href={graphic_url} as="image" />
      </Head>
      <CssBaseline />
      <Paper style={graphic_style["paperContainer"]}>
        <Box
          sx={{
            pt: "7%", // 12
	    pl: "5%",
	    pr: "33%", // 40
	    float: "left",
	    width: "100%",
          }}
        >
	  {/* landing screen */}
          <Container maxWidth="xl">
            <Typography
	      component="h1"
	      variant={params.primary}
	      align="left"
	      color="textPrimary"
	      gutterBottom
            >
	      Fast and affordable 3D rendering
            </Typography>
            <Typography variant={params.secondary} align="left" color="textPrimary">
	      Don't settle for lower quality work because of high rendering costs.
            </Typography>
            <Typography variant={params.secondary} align="left" color="textPrimary">
	      Render your animated creations with rentaflop farm and save thousands.
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
		  <RentaflopButton button_class="cta_button" submit text="Start rendering" />
		</Grid>
	      </Grid>
	    </form>
          </Container>
        </Box>
	{ is_large_screen &&
	  <Link href="/#learn" scroll={false}>
	    <ArrowDownwardIcon style={{ color: textColorDark, fontSize: 225, marginTop: "-35px" }} />
	  </Link>
	}
      </Paper>
      
      {/* meet rentaflop, what it is */}
      <Container sx={{ pt: 4, pb: 4 }} maxWidth="md" id="learn">
	<RentaflopText title={intro_title} body={intro_body}/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
	    <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
	    >
              <CardContent sx={{ flexGrow: 1 }}>
		<Typography align="left" paragraph paddingTop="24px">
		  Rentaflop helps 3D artists render animations faster and cheaper. Simply upload your project, launch your render, and download the completed
		  result.
		</Typography>
		<Typography align="left" paddingTop="12px">
		  Join now and render your work!
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
		      <RentaflopButton button_class="cta_button" submit text="Join" />
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
	      <CardMedia>
		<div style={{ position: 'relative', width: 563, height: 324 }}>
		  <Image alt="Blender application home screen" src="./static/blender_application.avif" fill
			 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
		</div>
	      </CardMedia>
	    </Card>
          </Grid>
        </Grid>
      </Container>
      
      {/* supported software */}
      <Container sx={{ pt: 4 }} maxWidth="lg">
        <Grid container spacing={3} id="software-cards" justifyContent="center">
          {software_cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={2}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContentNoPadding sx={{ flexGrow: 1 }}>
		  {card.logo}
		  {card.name}
		  {card.engines}
                </CardContentNoPadding>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* primary benefits */}
      <Container sx={{ pt: 4 }} maxWidth="md">
	<RentaflopText title={benefits_title} body={benefits_body}/>
        <Grid container spacing={3} id="intro-cards">
          {intro_cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContentNoPadding sx={{ flexGrow: 1 }}>
		  {card.primary}
		  {card.secondary}
		  {card.icon}
                </CardContentNoPadding>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
	<RentaflopButton button_class="cta_button" text="Try it now" dest={portal_url+"/register"} />
	<RentaflopButton button_class="button_style" text="About us" dest={"/about"} />
      </Stack>

      {/* how rentaflop compares to alternatives table */}
      { is_large_screen &&
	<>
	  <RentaflopTable title={table_title} cols={table_cols} body={table_body} footer={table_footer} />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
          >
	    <RentaflopButton button_class="cta_button" text="Render now" dest={portal_url+"/register"} />
	    <RentaflopButton button_class="button_style" text="About us" dest={"/about"} />
          </Stack>
	</>
      }

      {/* how it works */}
      <Container maxWidth="md">
 	<RentaflopText title={tutorial_title} padding={"64px"} />
        <Grid container spacing={4} id="tutorial">
          {tutorial_cards.map((card) => (
	    <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContentNoPadding sx={{ flexGrow: 1 }}>
		  {card.step}
		  {card.instruction}
		  {card.icon}
		</CardContentNoPadding>
	      </Card>
	    </Grid>
	  ))}
	</Grid>
      </Container>

      {/* social proof */}
      <Container maxWidth="md">
	<RentaflopText title={business_title} padding={"64px"} />
        <Grid container spacing={4} id="business">
          {business_cards.map((card) => (
	    <Grid item key={card.id} xs={12} sm={6} md={4}>
	      <Link href={card.url} sx={{pt: 20}}>
		{card.img}
	      </Link>
	    </Grid>
	  ))}
	</Grid>
	<RentaflopText title={social_title} padding={"64px"} />
	<Carousel interval={10000} navButtonsAlwaysInvisible={true}>
          {social_cards.map((card) => (
            <Card key={card.id}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContentNoPadding sx={{ flexGrow: 1 }}>
		{card.author}
		{card.quote}
	      </CardContentNoPadding>
	    </Card>
	  ))}
	</Carousel>
        <Stack
          sx={{ pt: 4, pb: 3 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
	  <RentaflopButton button_class="cta_button" text="Render your work" dest={portal_url+"/register"} />
	  <RentaflopButton button_class="button_style" text="About us" dest={"/about"} />
        </Stack>
      </Container>
    </Page>
  );
}
