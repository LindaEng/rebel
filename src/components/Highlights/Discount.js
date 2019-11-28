import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';


class Discount extends Component {

    state={
        discountStart:0,
        discountEnd:60
    }

    percentage=()=>{
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart +1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },20)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                <Fade
                    onReveal={()=>this.percentage()}
                
                
                > 
                    <div className="discount_percentage">

                    <span>{this.state.discountStart}%</span>
                    <span>Proceeds are Donated</span>

                    </div>
                </Fade>

               <Slide right>
                <div className="discount_description">
                    <h3>Event Proceeds will be donated to:</h3>
                    <p></p>
                
                    <MyButton
                        text="Buy Tickets"
                        bck="magenta"
                        color="white"
                        link="https://www.eventbrite.com"
                    
                    />

                </div>
                </Slide>
                
               </div> 
                
            </div>
        );
    }
}

export default Discount;