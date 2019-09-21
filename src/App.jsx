import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loginscreen from './pages/Loginscreen';
import Registrationscreen from './pages/Registrationscreen';

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


