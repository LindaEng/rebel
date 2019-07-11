import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


class Header extends Component {
    render() {
        return (
            <AppBar 
            position = "fixed"
            style={{
                backgroundColor: '#51e7f5',
                boxShadow:'none',
                padding: '10px, 0px' ,
            }}>
            <Toolbar>
                <div className="header_logo">
                    <div><img src={require("../../resources/images/rebel_web_logo.png")} alt="" height="300" width="300"/></div> 
                    <div >danceparty</div>
                    <IconButton 
                        aria-label="Menu"
                        color="inherit"
                        /*onClick={()=>}*/
                    >
                        
                        <MenuIcon/>
                    </IconButton>
                    
                </div>
            </Toolbar> 
            </AppBar>
        );
    }
}

export default Header;  