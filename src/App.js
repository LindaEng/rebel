import React, {Component} from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';

class App extends Component {
  render(){
  return (
    <div className="App" style={{ height:"1500px",background:"lightgrey"}}>
     <Header/>
     <Featured/>
     <VenueNfo/>
     <Highlights/>
     <Pricing/>
     <Location/>
    </div>
  );
 }
}



export default App;
