import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loginscreen from './components/Loginscreen';

const App = () => {
  return ( 
    <Fragment>
      <Router>

      <Route path="/" exact component={Loginscreen} />
      </Router>
    
    </Fragment>
  )
}
 
export default App;


