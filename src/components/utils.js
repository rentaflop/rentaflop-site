import React from 'react';
import { Container, CssBaseline, createTheme, ThemeProvider, Divider, Box, Grid, Paper,
	 Typography, Table, TableHead, TableBody, TableRow, TableCell, styled, Button, Link } from '@mui/material';
import theme from './theme';
import { Link as ButtonLink } from 'next/link'
import { makeStyles } from '@material-ui/styles';


export const RentaflopLink = styled(Link)({
  textDecoration: "none",
  '&:hover': {
    textDecoration: "underline",
  },
});


export function https_log(log, log_level) {
  // do nothing if not on client
  if (typeof window === "undefined") {
    return;
  }
  
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
  const no_divider = props.no_divider;
  var padding = props.padding;
  padding = padding ? padding : "24px"

  return (
    <ThemeProvider theme={rentaflop_text_theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{paddingTop: padding, textAlign: "left"}}>
	<main>
	  { title }
	  { !no_divider &&
	    <Divider/>
	  }
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


export function RentaflopButton(props) {
  const textColorLight = theme.palette.text.light;
  const textColorDark = theme.palette.text.dark;
  const gradient = theme.palette.gradient;
  const gradient_hover = theme.palette.gradient_hover;
  const useStyles = makeStyles((theme) => ({
    button_style: {
      backgroundColor: "rgba(251, 251, 251, .2)!important",
      color: textColorDark + "!important",
      '&:hover': {
	backgroundColor: "rgba(251, 251, 251, .4)!important",
      },
      textTransform: 'none!important',
      borderRadius: "50px!important",
    },
    cta_button: {
      background: gradient,
      color: textColorLight + "!important",
      '&:hover': {
	background: gradient_hover,
      },
      textTransform: 'none!important',
      borderRadius: "50px!important",
      "&:disabled": {
        backgroundColor: 'red!important'
      }
    },
    disabled_button: {
      background: textColorDark,
      color: textColorLight,
      borderRadius: "50px!important",
    },
  }));
  const classes = useStyles();
  var button_class = classes[props.button_class]
  var button_component = ButtonLink;
  if (props.button_component !== undefined) {
    button_component = props.button_component;
  }
  var disabled = false;
  if (props.disabled !== undefined) {
    disabled = props.disabled;
  }
  if (disabled) {
    button_class = classes["disabled_button"];
  }
  var button = <Button component="a" linkcomponent={button_component} href={props.dest} className={button_class} variant="contained" disabled={disabled}>{props.text}</Button>
  if (props.button_click !== undefined) {
    button = <Button onClick={props.button_click} className={button_class} variant="contained" disabled={disabled}>{props.text}</Button>
  }
  if (props.submit !== undefined) {
    button = (
      <Button
        variant="contained"
        type="submit"
	className={button_class}
	style={{ borderRadius: 50, marginBottom: 10 }}
	disabled={disabled}
      >
        <Typography>
          {props.text}
        </Typography>
      </Button>
    );
  }
  
  return button;
}
