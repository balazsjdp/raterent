import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {Router, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sizing } from '@material-ui/system';
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
        loginUserName: '',
        loginUserPassword: ''
     }
     constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
      } 




    doLogin(){
        axios.post('http://localhost:5000/login/verifyCredentials', {
            userName: this.state.loginUserName,
            userPassword: this.state.loginUserPassword
        }).then((response) =>{
            console.log(response)
            if(response.data.userFound == true && response.data.isPasswordValid == true){
                window.location.pathname = '/mainpage'
            }else{
                document.getElementById('errorMessage').style.display = 'block'
            }
        })
        .catch((err) =>{
            document.getElementById('errorMessage').innerHTML = 'Hiba történt a bejelentkezés közben. Kérjük próbálja meg újból!'
            document.getElementById('errorMessage').style.display = 'block'
        })
    }

    handleInput(e){
        if(e.target.id == 'loginUserName') this.setState({ loginUserName : e.target.value})
        if(e.target.id == 'loginUserPassword') this.setState({ loginUserPassword : e.target.value})
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
                            <Paper style={styles.paper}>
                                <Grid container>
                                    <Grid item xs={12} align="center">
                                        <Typography variant="h4" gutterBottom>
                                        Regisztráció
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <br/>
                                <TextField
                                    id="loginUserName"
                                    label="Felhasználónév"
                                    placeholder="Username"
                                    style={styles.textField}
                                    margin="normal"
                                    fullWidth
                                    onChange={this.handleInput.bind(this)}
                                />
                                <br/>
                                <TextField
                                    id="loginUserPassword"
                                    label="Jelszó"
                                    style={styles.textField}
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    fullWidth
                                    onChange={this.handleInput.bind(this)}
                                />
                                <br/>
                                <Grid container>
                                    <Grid id="errorMessage" style={styles.errorMessage} item xs={12}>Hibás felhasználónév vagy jelszó!</Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} align="center"> <Button size="large" onClick={this.doLogin} style={styles.loginButton} variant="contained" color="primary">Login</Button></Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} align="right"><Typography style={styles.regLink}color="primary" variant="subtitle1"> <Link style={{textDecoration: 'none'}}to="/">Bejelentkezés</Link></Typography></Grid>
                                </Grid>

                            </Paper>
                            
                        </Grid>
 

                        










                    </Grid>


                    
             
               
               
            </Fragment>
        
        
        
        
            );
    }
}
 
export default Registrationscreen;

