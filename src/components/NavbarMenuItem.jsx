import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  let menuItems = 0;


  if(props.menuProperties){
      
    menuItems  = props.menuProperties.menuItems.map(item => {
        return  <MenuItem onClick={() => props.history.push(item.pageName)} key={item.pageName}><Link onClick={() => props.history.push(item.pageName)} style={{color:"inherit", textDecoration:"none"}} to={item.pageName}>{item.displayName}</Link></MenuItem>
    })
    
  }


  return (
    
    <Router>
        <SettingsIcon aria-controls="settings-menu" aria-haspopup="true" onClick={handleClick}></SettingsIcon>
        <Menu
            id="settings-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          
          {menuItems}
          
        

      </Menu>
      </Router>
      
  
  );
}



