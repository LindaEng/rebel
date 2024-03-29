import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
            >
            <List component ="nav">
                <ListItem button onClick={()=> console.log('Next Event')}>Next Event</ListItem>
                <ListItem button onClick={()=> console.log('Rebel Crew')}>Rebel! Crew</ListItem>
                <ListItem button onClick={()=> console.log('Highlights')}>Highlights</ListItem>
                <ListItem button onClick={()=> console.log('Tickets')}>Tickets</ListItem>
                <ListItem button onClick={()=> console.log('Location')}>Location</ListItem>

            </List>


            </Drawer> 


        
            
        
    );
};

export default SideDrawer;