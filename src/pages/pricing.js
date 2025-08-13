import React from 'react';
import { Typography, Card, CardContent, Grid, Stack, Container } from '@material-ui/core';
import { RentaflopText, RentaflopLink, RentaflopButton } from "../components/utils";
import Page from '../components/page'
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import { blue } from '@mui/material/colors';
import { orange } from '@mui/material/colors';


export default function Pricing() {
  const portal_url = "https://portal.rentaflop.com"
  const price_cards = [
    {
      "id": 0,
      "name":
      <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: "bold" }}>
	Standard
      </Typography>,
      "price":
      <Typography variant="h3" component="h1" style={{ fontWeight: "bold" }}>
	$0.0019
      </Typography>,
      "description":
      <Typography sx={{ pt: 2 }}>
	Designed for everyone! You choose your render time based on your deadline. Perfect for professionals rendering serious animations, with the option
	to prioritize rendering for maximum speed. Ease of use for hobbyists who aren't in a rush, allowing artists to save money and meet their budgets.
      </Typography>,
      "icon":
      <GroupsIcon style={{ color: orange[800], fontSize: 50 }} />
    },
  ]
  const title = <Typography component="h1" variant="h4" align="center" fontWeight="600" gutterBottom>Pricing</Typography>
  const body = (
    <>
      <Container sx={{ pt: 4, pb: 4 }} maxWidth="md">
        <Grid container spacing={3} id="price-cards" justifyContent="center">
          {price_cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
		  {card.name}
		  {card.price}
		  <Typography gutterBottom>per OBh*</Typography>
		  {card.description}
		  <div align="center">{card.icon}</div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Typography align="left" paragraph>
	You choose your desired price and render speed at render time. We calculate your render job's complexity by running Octane benchmarking, an industry standard for
	comparing graphics card computation power, and multiplying
	our price per OBh by the amount of time spent rendering. Our price calculator allows you to then select your desired render time base, quoting
	the exact price you'll pay.
      </Typography>
      <Typography align="left" paragraph>
	To know exactly how much your render will cost ahead of
	time, <RentaflopLink href={portal_url+"/register"} color="info.main" target="_blank">create an account</RentaflopLink> and use our
	free <RentaflopLink href={portal_url+"/launchpad"} color="info.main" target="_blank">price calculator</RentaflopLink>! Simply upload your project, and we'll quickly render
	a few frames to give you the exact price for the full render. Plus, we allow you to select your rendering deadline so you'll know when you can expect
	the results. You can even download sample frames to make sure the render is exactly how you'd expect. No credit card required until you're ready to render
	the full project.
      </Typography>      
      <Typography align="left" paragraph>
	We're able to maintain fast rendering while charging as low as 1/10th the price of other render farms by crowdsourcing. We leverage
	underutilized graphics cards from hardware owners across the globe to keep rentaflop fast and affordable. This gives us the ability to provide most competitive
	render speeds and pricing compared to other rendering services.
      </Typography>
      <Typography align="left" paragraph>
	*OBh means Octanebench hour, a measure of GPU processing power. Prices start at the specified OBh level, use our free price calculator to get the exact price for your render.
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
	<RentaflopButton button_class="cta_button" text="Render now" dest={portal_url+"/register"} />
	<RentaflopButton button_class="button_style" text="About us" dest={"/about"} />
      </Stack>
    </>
  );

  return (
    <Page title={"Pricing"} description={"Render your work for a fraction of the price of other render farms. Click to get a free price quote!"}>
      <RentaflopText title={title} body={body} />
    </Page>
  );
};
