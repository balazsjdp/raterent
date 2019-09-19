import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sizing } from '@material-ui/system';

const styles = {
    grid: {
        minHeight: '80vh'
    },
    paper: {
        padding: '2em'
    },
    textField: {
        marginLeft: '2em',
        marginRight: '2em',
        width: 300,
    },
    loginButton: {
        justifyContent: 'center',
        minWidth: '7em',
        marginTop: '4em'
    }
   
}


class Loginscreen extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Grid container
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={styles.grid}
                >


                    <Grid item xs={12}>
                        <Paper style={styles.paper}>
                        <Grid container>
                                <Grid item xs={12} align="center"> <Typography variant="h4" gutterBottom>
                            Bejelentkezés
                        </Typography> </Grid>
                            </Grid>
                        
                        <br/>
                            <TextField
                                id="standard-with-placeholder"
                                label="Felhasználónév"
                                placeholder="Username"
                                style={styles.textField}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="standard-password-input"
                                label="Jelszó"
                                style={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                            />
                            <br/>

                            <Grid container>
                                <Grid item xs={12} align="center"> <Button size="large"  style={styles.loginButton} variant="contained" color="primary">Login</Button></Grid>
                            </Grid>


                        </Paper>
                        
                    </Grid>
                  
                </Grid>
            </Fragment>
        
        
        
        
            );
    }
}
 
export default Loginscreen;