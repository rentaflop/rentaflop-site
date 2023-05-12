import React, { useState, useEffect } from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import Markdown from './markdown';
import SlideShow from './slideshow';


function fetchText(set_text, post) {
  fetch(post).then((response) => response.text()).then((text) => {
    set_text(text);
  })
}


function Main(props) {
  const { post, title, show_slideshow } = props;
  const [text, set_text] = useState(null);
  useEffect(() => {
    fetchText(set_text, post);
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, []);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom style={{fontWeight: "600"}} >
        {title}
      </Typography>
      <Divider />
      { (show_slideshow) &&
	<SlideShow />
      }
      { (text !== null) &&
	  <Markdown className="markdown" key={text.substring(0, 40)}>
            {text}
	  </Markdown>
      }
    </Grid>
  );
}

export default Main;
