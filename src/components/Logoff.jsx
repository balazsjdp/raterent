import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

const Logoff = () => {

    localStorage.removeItem('rateRentSessionToken')


    return ( 
        <Redirect to="/login"></Redirect>
     );
}
 
export default Logoff;