import React from 'react';
import { Container, CssBaseline, createTheme, ThemeProvider, Divider, Box, Grid, Paper,
	 Typography, Table, TableHead, TableBody, TableRow, TableCell, styled } from '@mui/material';


export function https_log(log, log_level) {
  var logApiUrl = 'https://portal.rentaflop.com/api/log'
  fetch(logApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "message": log, "level": log_level })
  });
} 


const rentaflop_text_theme = createTheme();


export function RentaflopText(props) {
  const title = props.title;
  const body = props.body;
  var padding = props.padding;
  padding = padding ? padding : "24px"

  return (
    <ThemeProvider theme={rentaflop_text_theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{paddingTop: padding, textAlign: "left"}}>
	<main>
	  { title }
	  <Divider/>
	  { body }
	</main>
      </Container>
    </ThemeProvider>
  );
}


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '& .MuiTableCell-head': {
    fontWeight: "bold"
  },
}));


export function RentaflopTable(props) {
  const title = props.title;
  const cols = props.cols;
  const body = props.body;
  const footer = props.footer;
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight="bold" component="h2" variant="h6" color="primary" gutterBottom>
                {title}
              </Typography>
              <Table size="small">
                <TableHead>
                  <StyledTableRow>
                    {cols.map((col) => (
                      <TableCell fontWeight="bold">{col}</TableCell>
                    ))}
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {body}
                </TableBody>
              </Table>
              { footer !== undefined &&
		footer
              }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
