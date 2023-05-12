import * as React from 'react';
import { Grid, Paper, Typography, Link } from '@mui/material';


function Sidebar(props) {
  const { archives, description, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={'/blog/'+archive.url_name} key={archive.title}>
          {archive.title}
        </Link>
      ))}
    </Grid>
  );
}

export default Sidebar;
