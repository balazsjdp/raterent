import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Registrationform from '../components/Registrationform';
import CssBaseline from '@material-ui/core/CssBaseline';

const axios = require('axios');


const styles = {
    grid: {
        minHeight: '80vh'
    },
    paper: {
        padding: '2em',
        width: '100%'
    },
    textField: {


    },
    loginButton: {
        justifyContent: 'center',
        minWidth: '7em',
        marginTop: '4em'
    },
    regLink :{
        cursor : 'pointer',
        marginTop: '2em'
    },
    errorMessage: {
        color: 'red',
        marginTop: '1em',
        display: 'none'
    }
   
}


class Registrationscreen extends Component {
    state = { 
        
     }
     constructor(props) {
        super(props);
      } 


    render() { 
        return ( 
            <Fragment>
               
               <CssBaseline />
               <Grid container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item xs={10} md={4}>
                            
                        </Grid>
                    </Grid>
            </Fragment>
        
        
        
        
            );
    }
}
 
export default Registrationscreen;

