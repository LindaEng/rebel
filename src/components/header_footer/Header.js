import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Menu';
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
                    <div></div> {/* add logo here */}
                    <div className="header_logo_title">Dance Party</div> 

                    
                </div>
            </Toolbar> 
            </AppBar>
        );
    }
}

export default Header;  