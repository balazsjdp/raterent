import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loginscreen from './pages/Loginscreen';
import Registrationscreen from './pages/Registrationscreen';
import Homescreen from './pages/Homescreen';
import Profilescreen from './pages/Profilescreen';
import Settingsscreen from './pages/Settingsscreen';
import Logoff from './components/Logoff';
import logo from './img/logo_v1.png'
import {AppBar,Button,Toolbar,Typography} from '@material-ui/core/';
import './css/app.css'
const createHistory = require("history").createBrowserHistory
const history = createHistory()
const axios = require('axios');



const styles = {
  appBar: {
      margin: 0,
      alignItems: 'flex-end'
  },
  buttons: {
      paddingLeft: '1em',
      paddingRight : '1em'
  },
  links: {
    color: 'inherit',
    textDecoration: "none",
    },
  accountCircle: {

  }
}

class App extends Component {
  state = { navbarSettings: false }

  async checkSession(){
    axios.post('http://localhost:5000/login/checkIfAliveSession', {
      token: localStorage.getItem('rateRentSessionToken')
        }).then((response) => {
          if(response.data.sessionIsAlive == 0 && (window.location.pathname != '/login' && window.location.pathname != '/regisztracio')){
            window.location.pathname = '/login'
            if(localStorage.getItem('rateRentSessionToken')) localStorage.removeItem('rateRentSessionToken')
          }else if(response.data.sessionIsAlive == 1 && (window.location.pathname == '/login' || window.location.pathname == '/regisztracio')){
            window.location.pathname = '/home'
          }else if(response.data.sessionIsAlive == 0 && window.location.pathname == '/home'){
            window.location.pathname = '/login'
            if(localStorage.getItem('rateRentSessionToken')) localStorage.removeItem('rateRentSessionToken')
          }
        })
  }


  async getNavbarSettings(page){
    axios.get(`http://localhost:5000/basic/getPageSettings?page=${page}`)
    .then(result => {
           this.setState({navbarSettings: result.data[0].configItemContent})
    })
  }

  async componentDidMount(){
    await this.checkSession()
    await this.getNavbarSettings(window.location.pathname)
  }

  render() { 
  
    let navBarItems = ''
    if(this.state.navbarSettings != false){
      navBarItems = this.state.navbarSettings.availableNavbarItems.map(item =>{
            return <Button style={styles.buttons} key={item.pageName} onClick={this.getNavbarSettings.bind(this,item.pageName)} className={item.isActive ? 'navBarLinkActive' : ''} color="inherit"><Link className={item.isActive ? 'navBarLinkActive' : ''} style={styles.links} to={item.pageName}>{item.displayName}</Link></Button>
      })
    }else{
        return <Button color="inherit">Loading...</Button>
    }


    return ( 
    <Fragment>
      <Router history={history}>
        <AppBar style={styles.appBar}>
          
          <Toolbar>
            {navBarItems}
            <img height={70} src={logo}></img>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/login" exact component={Loginscreen} />
          <Route exact path="/regisztracio" component={Registrationscreen} />
          <Route exact path="/home" component={Homescreen} />
          <Route exact path="/profil" component={Profilescreen} />
          <Route exact path="/settings" component={Settingsscreen} />
          <Route exact path="/logoff" component={Logoff} />
        </Switch>
      </Router>
    </Fragment> );
  }
}
 



export default App;


