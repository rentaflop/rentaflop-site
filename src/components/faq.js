import * as React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const faqs = [
  {
    question: `What is rentaflop?`,
    answer: `rentaflop is the cloud provider for AI hobbyists. Deep Learning enthusiasts rent managed GPUs affordably,
             allowing them to experiment, train, and tune their models.`
  },
  {
    question: `What is your refund policy?`,
    answer: `We hope you'll love rentaflop and won't need a refund, but if it comes to it, we're there for you.                                                         
             Just go to the billing page, click the refund button on the relevant transaction, and give some quick feedback.                                            
             A member of our team will review the request, and it will generally be approved within 48 hours.                                                           
             You may request a refund for any transaction within the past week.`
  },
];


export default function Faq() {
  return (
    <div>
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
    </div>
  );
}
