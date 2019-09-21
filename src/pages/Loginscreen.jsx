import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Loginform from '../components/Loginform';


const styles = {
    grid: {
        minHeight: '80vh'
    },
    paper: {
        padding: '2em',
        width: '100%'
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


class Loginscreen extends Component {
    state = { 
        loginUserName: '',
        loginUserPassword: '',
        sessionIsAlive: 0
     }
     constructor(props) {
        super(props);
        
      } 

    render() { 
        return ( 
            <Fragment>
               <CssBaseline />
                    <p>{this.state.sessionIsAlive}</p>
                    <Grid container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item xs={10} md={4}>
                            <Loginform style={styles}/> 
                        </Grid>
                    </Grid>
            </Fragment>
            );
    }
}
 
export default Loginscreen;

