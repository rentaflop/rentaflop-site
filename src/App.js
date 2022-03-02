import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { Home, About, Header, Footer, NotFound } from "./components";
import CssBaseline from '@mui/material/CssBaseline';
import { https_log } from './components/utils';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    https_log("User hit "+window.location.href, "INFO");

    return (
      <div className="App" style={{backgroundColor:"#FBFBFB"}}>
	<CssBaseline />
	<Header />
	<Switch>
	  <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
	  
	  {/*404 route must be last route in app*/}
	  <Route component={() => <NotFound />} />
	</Switch>
	<Footer />
      </div>
    );
  }
}

export default withRouter(App);
