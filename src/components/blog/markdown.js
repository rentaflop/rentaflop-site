import * as React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography, Link, Box } from '@mui/material';


function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

function NewPageLink(props) {
  return <Link target="_blank" rel="noopener" {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
	fontWeight: "600",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2', fontWeight: "600" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: NewPageLink },
    li: {
      component: MarkdownListItem,
    },
    img: {
      component: "img",
      props: { width: "100%" }
    },
    code: {
      component: "code",
      props: { "style": { "color": "#666666" } }
    },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
