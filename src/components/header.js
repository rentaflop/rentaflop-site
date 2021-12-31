import React, { Component } from 'react';
import { Typography, Toolbar, AppBar, Box, Button } from '@material-ui/core';
import theme from '../theme';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as RentaflopLogo } from './../static/rentaflop_logo.svg';
import { withStyles } from '@material-ui/styles';


// get theme colors
const textColor = theme.palette.text.light;
const primaryColor = theme.palette.primary.main; // #424242
const lightPrimaryColor = theme.palette.primary.light;
const gradient = theme.palette.gradient;
const gradient_hover = theme.palette.gradient_hover;
const styles = theme => ({
  button_style: {
    backgroundColor: "rgba(251, 251, 251, .2)!important",
    color: textColor + "!important",
    '&:hover': {
      backgroundColor: "rgba(251, 251, 251, .4)!important",
    },
    textTransform: 'none!important',
    borderRadius: "50px!important",
  },
  cta_button: {
    background: gradient,
    color: textColor + "!important",
    '&:hover': {
      background: gradient_hover,
    },
    borderRadius: "50px!important",
  }
})


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };


  render() {
    const { classes } = this.props;
    const portal_url = "https://portal.rentaflop.com"
    
    return (
      <AppBar style={{ backgroundColor: primaryColor, borderBottom: '1px solid', borderColor: lightPrimaryColor }} position='static'>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <a href='/' style={{ color: textColor, textDecoration: 'none' }}>
	      <RentaflopLogo style={{ width: "63.63px", height: "20.18px" }}/>
              <Typography variant='inherit'>
                rentaflop
              </Typography>
            </a>
          </Box>
	  <Box marginRight='10px'>
	    <Button href={portal_url+"/login"} className={classes.button_style} variant="outlined">
	      Sign in
	    </Button>
	  </Box>
	  <Box marginRight='10px'>
	    <Button href={portal_url+"/register"} className={classes.cta_button} variant="outlined">
	      Train an AI free
	    </Button>
	  </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(withRouter(Header));
