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

class Registrationform extends Component {
    state = { 
        userName : {length: -1, value : ''},
        emailAddress : {length: -1, value : ''},
        lastName : {length: -1, value : ''},
        firstName : {length: -1, value : ''},
        password : {length: -1, value : ''},
        passwordConfirm : {length: -1, value : ''},
     }

    constructor(props){
        super(props)
        this.validateInput = this.validateInput.bind(this)
        
    }

    regButtonIsPressed = 0

    handleInput(e){
        switch(e.target.id){
            case 'userName':
                this.setState({ userName : {length: e.target.value.length, value:e.target.value }})
                break;
            case 'emailAddress':
                this.setState({ emailAddress : {length: e.target.value.length, value:e.target.value }})
                break;
            case 'lastName':
                this.setState({ lastName : {length: e.target.value.length, value:e.target.value }})
                break;
            case 'firstName':
                this.setState({ firstName : {length: e.target.value.length, value:e.target.value }})
                break;
            case 'password':
                this.setState({ password : {length: e.target.value.length, value:e.target.value }})
                break;
            case 'passwordConfirm':
                this.setState({ passwordConfirm : {length: e.target.value.length, value:e.target.value }})
                break;
        }
    }

    registration(){
        const {userName,emailAddress,lastName,firstName,password} = this.state
        axios.post('http://localhost:5000/registration/register', {
            userName : userName.value,
            userEmail : emailAddress.value,
            userLastName : lastName.value,
            userFirstName : firstName.value,
            userPassword : password.value
        }).then(response =>{
            console.log(response)
            const {data} = response
            if(data.success == 1) this.showMessage('A regisztráció sikeres volt!','#834bff')
            if(data.errorCode == 11000) this.showMessage('Ilyen felhasználó már létezik!','red')

        })

        //userName,userEmail,userPassword, userFirstName,userLastName

    }

    showMessage(message, color){
        document.getElementById('errorMessage').innerHTML = message
        document.getElementById('errorMessage').style.color = color
        document.getElementById('errorMessage').style.display = 'block'
    }

    hideErrorMessage(){
        document.getElementById('errorMessage').innerHTML = ''
        document.getElementById('errorMessage').style.display = 'none'
    }
    

    validateInput(){
       this.regButtonIsPressed = 1;
       let error = false;
       for(let item in this.state){
            if(this.state[item].length == -1){
                error = true
                this.setState({[item] : {length : 0}})
            }
       }
       
       if(this.state.password.value !== this.state.passwordConfirm.value){
            error = true
            this.showMessage('Hiba! A jelszavak nem egyeznek!','red')
       }else if(this.state.password.length < 8){
            error = true
            this.showMessage('Hiba! A jelszónak minimum 7 karakteresnek kell lennie!','red')
       }else{
            this.hideErrorMessage()
       }

       if(!error) this.registration()

    }

    render() { 

        return ( 
            <Paper style={this.props.style.paper}>
                <Grid container>
                    <Grid item xs={12} align="center">
                        <Typography variant="h4" gutterBottom>
                        Regisztráció
                        </Typography>
                    </Grid>
                </Grid>

                <br/>
                <TextField
                    required
                    id="userName"
                    error={this.state.userName.length == 0 ? true : false}
                    helperText = {this.state.userName.length == 0 ? 'A felhasználónevet kötelező megadni!' : false}
                    label="Felhasználónév"
                    placeholder="Username"
                    style={this.props.style.textField}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    onChange={this.handleInput.bind(this)}
                />
                <br/>
                <TextField
                    required
                    id="emailAddress"
                    error={this.state.emailAddress.length == 0 ? true : false}
                    helperText = {this.state.emailAddress.length == 0 ? 'Az email címet kötelező megadni!' : false}
                    label="Email cím"
                    type="email"
                    placeholder="Email cím"
                    style={this.props.style.textField}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    onChange={this.handleInput.bind(this)}
                />
                <br/>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                         <TextField
                            required
                            id="lastName"
                            error={this.state.lastName.length == 0 ? true : false}
                            helperText = {this.state.lastName.length == 0 ? 'A vezetéknevet kötelező megadni!' : false}
                            label="Vezetéknév"
                            placeholder="Vezetéknév"
                            style={this.props.style.textField}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            onChange={this.handleInput.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            error={this.state.firstName.length == 0 ? true : false}
                            helperText = {this.state.firstName.length == 0 ? 'A keresztnevet kötelező megadni!' : false}
                            id="firstName"
                            label="Keresztnév"
                            placeholder="Keresztnév"
                            style={this.props.style.textField}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            onChange={this.handleInput.bind(this)}
                        />
                    </Grid>
                </Grid>
                <br/>
                <TextField
                    required
                    id="password"
                    error={this.state.password.length == 0 ? true : false}
                    helperText = {this.state.password.length == 0 ? 'A jelszót kötelező megadni!' : false}
                    label="Jelszó"
                    style={this.props.style.textField}
                    type="password"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    onChange={this.handleInput.bind(this)}
                />
                <br/>
                <TextField
                    required
                    id="passwordConfirm"
                    error={this.state.passwordConfirm.length == 0 ? true : false}
                    helperText = {this.state.passwordConfirm.length == 0 ? 'Jelszó megerősítés szükséges!' : this.state.password.value !== this.state.passwordConfirm.value ? 'A jelszavak nem egyeznek!' : false}
                    label="Jelszó Újra"
                    style={this.props.style.textField}
                    type="password"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    onChange={this.handleInput.bind(this)}
                />
                <Grid container>
                    <Grid id="errorMessage" style={this.props.style.errorMessage} item xs={12}></Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} align="center"> <Button size="large" onClick={this.validateInput} style={this.props.style.loginButton} variant="contained" color="primary">Regisztráció</Button></Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} align="right"><Typography style={this.props.style.regLink}color="primary" variant="subtitle1"> <Link style={{textDecoration: 'none'}}to="/login">Van már fiókod? Jelentkezz be! </Link></Typography></Grid>
                </Grid>
            </Paper>
         );
    }
}
 
export default Registrationform;