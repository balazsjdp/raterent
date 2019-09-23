import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loginscreen from './pages/Loginscreen';
import Registrationscreen from './pages/Registrationscreen';
import Homescreen from './pages/Homescreen';
import Navbar from './components/Navbar';


const axios = require('axios');



class App extends Component {
  state = { navbarSettings: false }

  async checkSession(){
    axios.post('http://localhost:5000/login/checkIfAliveSession', {
      token: localStorage.getItem('rateRentSessionToken')
        }).then((response) => {
          if(response.data.sessionIsAlive == 0 && window.location.pathname != '/login'){
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
    return ( 
    <Fragment>

      <Navbar navbarSettings={this.state.navbarSettings}/>

      <Router>
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/regisztracio" component={Registrationscreen} />
        <Route path="/home" component={Homescreen} />
      </Router>
    
    </Fragment> );
  }
}
 



export default App;


