import React, { Component,Fragment } from 'react';
import {AppBar,Button,Toolbar,Typography} from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const axios = require('axios');


const styles = {
    appBar: {
        margin: 0,
        alignItems: 'flex-end'
    },
    buttons: {
        paddingLeft: '2em',
        paddingRight : '2em'
    }
}


class Navbar extends Component {
    state = { navbarSettings: 0 }
    
    constructor(props){
        super(props)
  
    }

       
    async componentDidMount(){
        console.log(this.props)
    }

    render() { 
        let navBarItems = ''


        if(this.props.navbarSettings != false){
            navBarItems = this.props.navbarSettings.availableNavbarItems.map(item =>{
                return <Button style={styles.buttons} color="inherit">{item.displayName}</Button>
            })

        }else{
            return <Button color="inherit">Loading...</Button>
        }

        
        return ( 
            
            <Fragment>
                <AppBar style={styles.appBar}>
                    <Toolbar>
                        {navBarItems}
                    </Toolbar>
                </AppBar>

            </Fragment>
         );
    }
}
 
export default Navbar;