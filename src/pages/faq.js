import * as React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RentaflopLink } from "../components/utils";
import Page from '../components/page'


const portal_url = "https://portal.rentaflop.com"
const faqs = [
  {
    question: `What is rentaflop?`,
    answer: `Rentaflop is a crowdsourced cloud render farm offering Maya and Blender artists fast and affordable rendering from hardware owners across the globe. 
             3D artists create without compromising on quality or overpaying on traditional render services, and graphics card owners earn money without lifting a finger.`
  },
  {
    question: `Is my data safe on rentaflop?`,
    answer: `Yes, you have security and privacy when you render with rentaflop. Your work is encrypted upon upload and when placed on rendering machines. 
             For customers with the most strict security and privacy requirements, our pro tier limits rendering to only machines owned by rentaflop 
             and trusted partners.
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
    question: `How can I become a rentaflop host?`,
    answer: <>
	      With rentaflop miner, your hardware can pay for itself while helping 3D artists render their projects. If you have a recent Nvidia discrete graphics card,
	      you can run rentaflop miner. Please follow the <RentaflopLink href="/blog/hosting" color="info.main">hosting instructions</RentaflopLink> to
	      start making money without lifting a finger!
	    </>
  },
  {
    question: `Why rentaflop?`,
    answer: <>
	      Rentaflop’s mission is to increase the computational wealth of the world. We connect 3D artists with hardware owners to make
	      rendering more affordable and to put the world's GPUs to work. If you'd like to learn more, 
	      please read the <RentaflopLink href="/blog/mission-statement" color="info.main">rentaflop mission statement</RentaflopLink>.
	    </>
  },
  {
    question: `How can I learn more about rentaflop and our products?`,
    answer: <>
	      If you want to read about rentaflop, find our latest news, or learn a variety of things about software development and startups,
	      read our <RentaflopLink href="/blog" color="info.main">blog</RentaflopLink>.
	    </>
  },
  {
    question: `How does billing work?`,
    answer: <>
	      To use rentaflop rendering, you must first create an account and add <RentaflopLink href={portal_url+"/payment"} color="info.main">add payment info</RentaflopLink>.
	      When you submit a rendering, you'll be charged according to the amount of computing power used to complete the rendering.
	      We use Octane benchmarking to calculate a score for each graphics card on the rentaflop network and bill in minute increments
	      on each device used to render your workload. At the end of each month, your payment method will be charged for the entire month's
	      usage.
	    </>
  },
  {
    question: `What is your refund policy?`,
    answer: <>
	      We hope you'll love rentaflop and won't need a refund, but if it comes to it, we're there for you.
              Just go to the <RentaflopLink href={portal_url+"/billing"} color="info.main">billing</RentaflopLink> page, click the refund button on the relevant
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
  return (
    <Page>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom
      >
        FAQ
      </Typography>
      
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
    </Page>
  );
}
