import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loginscreen from './pages/Loginscreen';
import Registrationscreen from './pages/Registrationscreen';
import Homescreen from './pages/Homescreen';
const axios = require('axios');



class App extends Component {
  state = {  }

  checkSession(){
    axios.post('http://localhost:5000/login/checkIfAliveSession', {
      token: localStorage.getItem('rateRentSessionToken')
        }).then((response) => {
          if(response.data.sessionIsAlive == 0 && window.location.pathname != '/login'){
            window.location.pathname = '/login'
          }
        })
  }


  componentDidMount(){
    this.checkSession()
  }


  render() { 
    return ( <Fragment>
      <Router>
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/regisztracio" component={Registrationscreen} />
        <Route path="/home" component={Homescreen} />
      </Router>
    
    </Fragment> );
  }
}
 



export default App;


