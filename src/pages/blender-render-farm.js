import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CssBaseline, Grid, Stack, Container, Paper,
	 TableCell, TableRow } from '@material-ui/core';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { RentaflopText, RentaflopTable, RentaflopButton, RentaflopLink } from '../components/utils';
import theme from '../components/theme';
import TextField from '@mui/material/TextField';
import Page from '../components/page'
import Image from 'next/image'
import Link from 'next/link'
import { styled } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import BoltIcon from '@mui/icons-material/Bolt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { yellow } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import Carousel from 'react-material-ui-carousel'
import Head from 'next/head'


const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

function make_graphic_styles(is_large_screen) {
  // converted by https://cdkm.com/svg-to-avif; https://mconverter.eu/convert/svg/avif/ also seems to work well for some files
  // const url = `url(${"../../static/rocket_graphic.avif"})`;
  // TODO see if we can only load one of these (they both load on mobile because of use media query double exec)
  const url = is_large_screen ? `url(${"../../static/rocket_graphic.avif"})` : `url(${"../../static/rocket_graphic_mobile.avif"})`;
  // const url = `url(${Graphic.src})`
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

const portal_url = "https://portal.rentaflop.com";
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

const business_cards = [
  {
    "id": 0,
    "img": <Image src={"./static/epilog_logo.svg"} alt={"Epilog laser is a happy rentaflop customer"} width={250} height={100} />,
    "url": "https://www.epiloglaser.com/?ref=rentaflop",
  },
  {
    "id": 1,
    "img": <Image src={"./static/cgc_logo.avif"} alt={"Rentaflop partners with CG Cookie"} width={250} height={100} />,
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
  {
    "id": 2,
    "author":
    <Typography gutterBottom variant="h6" component="h2">
      <span style={{ fontWeight: "bold" }} >David Adam Ettedgui</span> - Producer at Ettedgui Films
    </Typography>,
    "quote":
    <Typography align="left" gutterBottom>
      "Time is money, and I saved both with rentaflop. This service is terrific."
    </Typography>,
  },
  {
    "id": 3,
    "author":
    <Typography gutterBottom variant="h6" component="h2">
      <span style={{ fontWeight: "bold" }} >Parker Warner Wright</span> - Producer at Wright Times Productions
    </Typography>,
    "quote":
    <Typography align="left" gutterBottom>
      "Great service you're offering. I look forward to doing more rendering with rentaflop."
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
  // runs once on server (returns default value of true) and then again on client; return true so desktop only loads one rocket graphic
  const is_large_screen = useMediaQuery('(min-width:600px)', { defaultMatches: true });
  const params_large = {
    "primary": "h1",
    "secondary": "h4"
  }
  const params_small = {
    "primary": "h3",
    "secondary": "h6"
  }
  const params = is_large_screen ? params_large : params_small;
  const intro_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Meet rentaflop, Earth's most innovative Blender render farm</Typography>
  const intro_body = <Typography align="left" paragraph paddingTop="24px" />
  const benefits_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>Why render with us?</Typography>
  const benefits_body = <Typography align="left" paragraph paddingTop="24px" />
  let autofocus = true;
  // client-side-only code, so must check if window defined first
  if (typeof window !== "undefined") {
    // don't autofocus if they've clicked arrow since it brings screen back up on chrome
    autofocus = !window.location.href.includes("learn");
  }
  if (!is_large_screen) {
    autofocus = false;
  }

  const table_title_text = <Typography component="h1" variant="h2" align="left" fontWeight="600" gutterBottom>How rentaflop compares</Typography>
  const table_title = <RentaflopText title={table_title_text} />
  const table_cols = ["Company", "Price", "Fast Rendering Starting Immediately", "Supports Both Cycles and Eevee", "Satisfaction or Money Back", "Data Privacy"];
  const rows = [
    {"id": 0, "company": "rentaflop", "price": "$0.0019 per OBh", "fast": "Yes", "engines": "Yes", "refund": "Yes", "privacy": "Yes"},
    {"id": 1, "company": "RenderStreet", "price": "~$0.0068 per OBh", "fast": "Yes", "engines": "Yes", "refund": "No", "privacy": "Yes"},
    {"id": 2, "company": "GarageFarm", "price": "$0.0050 per OBh, fast tier", "fast": "Yes", "engines": "No", "refund": "No", "privacy": "Yes"},
    {"id": 3, "company": "RebusFarm", "price": "$0.0045 per OBh", "fast": "Yes", "engines": "No", "refund": "Yes", "privacy": "Yes"},
    {"id": 4, "company": "Concierge Render", "price": "$0.0040 per OBh", "fast": "Yes", "engines": "Yes", "refund": "No", "privacy": "Yes"},
    {"id": 5, "company": "Blendergrid", "price": "Determined prior to render", "fast": "Yes", "engines": "No", "refund": "Yes", "privacy": "Yes"},
    {"id": 6, "company": "SheepIt", "price": "Spend points earned from providing computing power", "fast": "No", "engines": "Yes", "refund": "No", "privacy": "No"},
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
  const graphic_style = make_graphic_styles(is_large_screen)["paperContainer"]
  const what_title = <Typography component="h1" variant="h4" align="left" fontWeight="600" gutterBottom>What is a Blender render farm?</Typography>
  const what_body = (
    <Typography align="left" paddingTop="24px">
      A Blender render farm is a collection of computers that work together to render your 3D graphics or animations.
      It allows you to distribute the rendering process across multiple machines, which can significantly reduce the time it takes to render a scene.
      Render farms are used by professionals in the animation, architecture, and film industries to create high-quality, photo-realistic images and animations.
      Read more about <RentaflopLink href="/blog/how-blender-render-farms-save-time-and-money" color="info.main">how a Blender render farm can save
		      you time and money on your next project</RentaflopLink>.
    </Typography>
  );
  
  return (
    <Page title={"Blender Render Farm"} description={"Learn what a Blender render farm is and how rentaflop render farm helps you save time and money."}>
      <Head> 
	<link rel="preload" href="../../static/rocket_graphic.avif" as="image" />
      </Head>
   <CssBaseline />
      <Paper style={graphic_style}>
        <Box
          sx={{
            pt: "7%", // 7
	    pl: "5%",
	    pr: "33%",
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
	      Fast and affordable Blender render farm
            </Typography>
            <Typography variant={params.secondary} align="left" color="textPrimary">
	      Don't settle for lower quality work because of high rendering costs.
            </Typography>
            <Typography variant={params.secondary} align="left" color="textPrimary">
	      Render your 3D creations with our high-speed Blender render farm and save thousands.
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
	  <Link href="/blender-render-farm/#learn" scroll={false}>
	    <ArrowDownwardIcon style={{ color: textColorDark, fontSize: 225, marginTop: "-35px" }} />
	  </Link>
	}
      </Paper>
      
      {/* meet rentaflop, what it is */}
	      <Container sx={{ pt: 4 }} maxWidth="md" id="learn">
	<RentaflopText title={intro_title} body={intro_body}/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
	    <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
	    >
              <CardContent sx={{ flexGrow: 1 }}>
		<Typography align="left" paddingTop="24px">
		  Get an exact price quote, render time estimate, and sample frames for free!
		</Typography>
		<Typography align="left" paragraph>
		  Simply upload your project, launch your render, and download the completed
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

	      <Container sx={{ pt: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={8}>
	    <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
	    >
	      <CardMedia>
		<div style={{ position: 'relative', width: 563, height: 324 }}>
		  <Image alt="Blender Suzanne" src="./static/suzanne.avif" fill
			 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
		</div>
	      </CardMedia>
	    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
	    <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
	    >
              <CardContent sx={{ flexGrow: 1 }}>
		<Typography align="left" paragraph paddingTop="24px">
		  Rentaflop sources its hardware from across the globe, tapping into a supply of millions of graphics cards, rather than centralized data centers.
		</Typography>
		<Typography align="left" paddingTop="12px">
		  The result: rentaflop helps Blender artists render animations faster and cheaper than anyone else in the world.
		</Typography>
              </CardContent>
	    </Card>
          </Grid>
        </Grid>
      </Container>
      
      {/* supported software */}
      <Container sx={{ pt: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
	    <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
	    >
              <CardContent sx={{ flexGrow: 1 }}>
		<Image src="./static/blender_logo.svg" height={100} width={100} style={{ display: "inline", verticalAlign: "baseline", height: 100,
										    }} alt="Blender logo" />
		<Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
		  BLENDER
		</Typography>
		<Typography>
		  Render engines:
		</Typography>
		<Typography>
		  Cycles
		</Typography>
		<Typography>
		  Eevee
		</Typography>
		<Typography gutterBottom>
		  All Blender versions available upon request
		</Typography>
              </CardContent>
	    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
	    <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
	    >
	      <CardMedia>
		<div style={{ position: 'relative', width: 563, height: 324 }}>
		  <Image alt="Blender application home screen" src="./static/blog/how_blender_render_farms_save_time_and_money/blender_35_splash.avif" fill
			 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
		</div>
	      </CardMedia>
	    </Card>
          </Grid>
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
	<Typography align="left" paddingTop="24px">
	  We give you fast and affordable rendering, up to 90% cheaper than alternative services like Blendergrid, GarageFarm, and RenderStreet.
	  Don't waste money paying several times more with other online render farms.
	  Use our price calculator to <span style={{ fontWeight: "bold" }}>get an exact price quote, render time estimate, and sample frames for free! </span>
	  No credit card required.
	</Typography>
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

      {/* what is a blender render farm? */}
      <Container maxWidth="md">
 	<RentaflopText title={what_title} body={what_body} padding={"64px"} />
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
