import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loginscreen from './components/Loginscreen';
import Registrationscreen from './components/Registrationscreen';

const App = () => {



  return ( 
    <Fragment>
      <Router>
        <Route path="/" exact component={Loginscreen} />
        <Route path="/regisztracio" component={Registrationscreen} />
      </Router>
    
    </Fragment>
  )
}
 
export default App;


