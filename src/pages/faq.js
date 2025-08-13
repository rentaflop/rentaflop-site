import * as React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RentaflopLink, RentaflopText } from "../components/utils";
import Page from '../components/page'


const portal_url = "https://portal.rentaflop.com"
const faqs = [
  {
    question: `What is rentaflop?`,
    answer: `Rentaflop is a cloud render farm offering Blender artists fast and affordable rendering from hardware across the globe. 
             3D artists create without compromising on quality or overpaying on traditional render services, and graphics card owners earn money without lifting a finger.`
  },
  {
    question: `Is my data safe on rentaflop?`,
    answer: `Yes, you have security and privacy when you render with rentaflop. Your work is encrypted upon upload and when placed on private rendering machines. 
             `
  },
  {
    question: `Why should I use rentaflop?`,
    answer: `You're an 3D animation hobbyist, professional, student, or just someone in general need of rendering computation. 3D artists can focus on improving
             their creations, rather than looking up Nvidia hardware specs. Our affordable prices allow you to render animations without breaking the bank, especially
             important for experimentation and meeting deadlines. With rentaflop rendering, you don't have to sacrifice on quality.
             `
  },
  {
    question: `Why rentaflop?`,
    answer: <>
	      Rentaflop’s mission is to increase the computational wealth of the world. We connect 3D artists with hardware owners to make
	      rendering more affordable and to put the world's GPUs to work. If you'd like to learn more, 
	      please read the <RentaflopLink href="/blog/mission-statement" color="info.main" target="_blank">rentaflop mission statement</RentaflopLink>.
	    </>
  },
  {
    question: `How can I learn more about rentaflop and our products?`,
    answer: <>
	      If you want to read about rentaflop render farm, find our latest news, or learn a variety of things about software development and startups,
	      read our <RentaflopLink href="/blog" color="info.main" target="_blank">blog</RentaflopLink>.
	    </>
  },
  {
    question: `Do you have a rendering API for programmatic usage?`,
    answer: <>
	      Yes, our API is used by some of our customers and even other render farms to automate their rendering. To gain access to our API,
	      please <RentaflopLink href={portal_url+"/contact"} color="info.main" target="_blank">contact us</RentaflopLink>.
	    </>
  },
  {
    question: `How does billing work?`,
    answer: <>
	      To use rentaflop rendering, you must first create an account and add <RentaflopLink href={portal_url+"/payment"} color="info.main" target="_blank">payment info</RentaflopLink>.
	      When you submit a rendering, you'll be charged immediately based on the exact price quoted by our price calculator.
	      Our price calculator estimates the amount of computing power it would take to complete the rendering and shows you the corresponding price.
	      We use Octane benchmarking to calculate a score for each graphics card on the rentaflop network and bill in minute increments
	      for each device used to render your workload.
	      Once you initiate the render, we process your payment for the amount quoted by the price calculator, and then we fully render your project.
	    </>
  },
  {
    question: `What is your refund policy?`,
    answer: <>
	      We hope you'll love rentaflop and won't need a refund, but if it comes to it, we're there for you.
              Just go to the <RentaflopLink href={portal_url+"/billing"} color="info.main" target="_blank">billing</RentaflopLink> page, click the refund button on the relevant
	      transaction, and give some quick feedback. A member of our team will review the request, and it will generally be
	      approved within 48 hours. You may request a refund for any transaction within the past week.
	    </>
  },
  {
    question: `Can I render NSFW projects?`,
    answer: `Yes, you may render NSFW projects on rentaflop. However, you must not use rentaflop for any illegal purpose, including rendering projects containing
             illegal data.`
  },
];


export default function Faq() {
  const title = <Typography component="h1" variant="h4" align="center" fontWeight="600" gutterBottom>Frequently Asked Questions</Typography>
  const body = (
    <>
      {faqs.map((faq) => (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left">
	    {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </>
  );
  
  return (
    <Page title={"FAQ"} description={"Want to know how our Blender render farm can help with your rendering? Visit us to learn more!"}>
      <RentaflopText title={title} body={body} />
    </Page>
  );
}
