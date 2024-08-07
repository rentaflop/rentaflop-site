import React from 'react';
import { Typography } from "@material-ui/core";
import { RentaflopText, RentaflopLink } from "../components/utils";
import Page from '../components/page'


export default function Rendering() {
  const portal_url = "https://portal.rentaflop.com"
  const title = <Typography component="h1" variant="h4" align="center" fontWeight="600" gutterBottom>Rendering</Typography>
  const body = (
    <>
      <Typography id="what-is-rentaflop" component="h2" variant="h6" align="left" fontWeight="600" paddingTop="24px" gutterBottom>What is rentaflop rendering?</Typography>      
      <Typography align="left" paragraph>
	Rentaflop is an on-demand cloud render farm. We leverage our global network of graphics cards to render 3D animations faster and cheaper for 3D artists. 
	When 3D artists need to create an animation, instead of lowering the quality of their work to reduce render times or paying thousands to buy or rent the
	hardware required, they can get fast and affordable rendering without compromising on quality.
	We're so confident you'll enjoy using rentaflop that we'll give you your money back if you're not satisfied with the results.
      </Typography>
      
      <Typography id="security-and-privacy" component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>Is it secure?</Typography>
      <Typography align="left" paragraph>
	Yes. Your work is encrypted upon upload and when placed on rendering machines. For customers with the most strict security and privacy requirements,
	our <RentaflopLink href="/pricing" color="info.main" target="_blank">pro tier</RentaflopLink> limits rendering to only machines owned by rentaflop and trusted partners.
      </Typography>

      <Typography id="pricing" component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>How much will it cost to render my project?</Typography>
      <Typography align="left" paragraph>
	You can see exactly how much it'll cost ahead of time by <RentaflopLink href={portal_url+"/register"} color="info.main" target="_blank">creating an account</RentaflopLink> and
	running our <RentaflopLink href={portal_url+"/launchpad"} color="info.main" target="_blank">price calculator</RentaflopLink>. Render your work for as low as 1/10th the price of other
	render farms through our crowdsourced standard tier. If you need absolute security, we offer an affordable pro tier for enhanced privacy during rendering.
	See our <RentaflopLink href="/pricing" color="info.main" target="_blank">pricing</RentaflopLink> for more info.
      </Typography>

      <Typography id="how-to-render" component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>How do I render my project?</Typography>
      <Typography align="left" paragraph>
	The first step to rendering your project is to <RentaflopLink href={portal_url+"/register"} color="info.main" target="_blank">create an account</RentaflopLink>, if you haven't already.
	You must also <RentaflopLink href={portal_url+"/payment"} color="info.main" target="_blank">add a payment method</RentaflopLink> prior to rendering. If you're not ready to add a payment
	yet, you can check the exact amount you'd pay prior to rendering by using
	our free <RentaflopLink href={portal_url+"/launchpad"} color="info.main" target="_blank">price calculator</RentaflopLink>. After you've added payment, you can render your
	whole project and you'll be charged monthly based on your usage,
	according to our <RentaflopLink href="/pricing" color="info.main" target="_blank">pricing</RentaflopLink>.
	Next, upload your file(s) on the <RentaflopLink href={portal_url+"/launchpad"} color="info.main" target="_blank">launchpad</RentaflopLink> and start the render, or if you've already
	uploaded the file and ran a price calculation you can start the full render from
	the <RentaflopLink href={portal_url+"/price-calculator"} color="info.main" target="_blank">price calculator</RentaflopLink> page to ensure you get the exact quoted price (note: you
	may be charged a different amount if you re-upload and render the file instead of running the render from the price calculator page). Your file will be
	rendered in parallel on many graphics cards around the world! You can watch the progress of your render jobs, as well as download results or stop jobs, on
	the <RentaflopLink href={portal_url+"/ground-control"} color="info.main" target="_blank">ground control</RentaflopLink> page.
      </Typography>

      <Typography id="including-external-files" component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>How can I ensure my textures and other external files are included?</Typography>
      <Typography align="left" paragraph>
	Make sure to pack all necessary textures and external files into your file. In addition, we support .zip file uploads, so you may include assets, videos,
	and caches from baking by zipping those with your file. For larger projects, we recommend running
	our <RentaflopLink href={portal_url+"/launchpad"} color="info.main" target="_blank">price calculator</RentaflopLink> and downloading the sample output provided in order to
	make sure the result meets your expectations. We believe it's easiest for artists to configure their projects straight from your profect file itself, so we
	do very little rendering configuration on our end.
	Please configure your rendering settings (such as sample sizes, file output types, frames, etc.) to your liking from within your 3D application.
      </Typography>

      <Typography id="render-settings" component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>What rendering settings do you support?</Typography>
	<Typography align="left" paragraph>
	  We support the most recent version of Autodesk 3DS Max, Maya, and Maxon Cinema 4D with V-Ray and Arnold rendering engines.
	We support rendering with both Cycles and Eevee, as well as most settings that come out-of-the-box with Blender. 
	  We use the settings in your project file to render the first scene found. For video outputs, we support AVI JPEG, AVI Raw, and FFmpeg Video.
	  If you've selected a different video output format for rendering, we'll automatically render
	  the frames to .png format so you can more easily create a video animation after you download your rendering output. We also allow you to output
	  frames to multi-layer EXR.
	We support rendering with all Blender versions upon request.
	We support scripting, so we'll run Python scripts automatically during rendering if you've configured them to run in your .blend file.
	The maximum upload size for your files is 10 GB.
	We support all built-in addons. If you're using 3rd party addons, or have additional
	questions (or need different versions, larger file size, etc.) about rendering, please <RentaflopLink href={portal_url+"/contact"} color="info.main" target="_blank">contact us</RentaflopLink>.
	</Typography>
      <Typography id="nsfw-projects" component="h2" variant="h6" align="left" fontWeight="600" gutterBottom>Can I render NSFW projects?</Typography>
      <Typography align="left" paragraph>
	Yes, you may render NSFW projects on rentaflop. However, you must not use rentaflop for any illegal purpose, including rendering projects containing
        illegal data.
      </Typography>
    </>
  );

  return (
    <Page title={"How Rendering Works"} description={"How does rentaflop render farm work? Read about how we provide fast and affordable rendering."}>
      <RentaflopText title={title} body={body} />
    </Page>
  );
};
