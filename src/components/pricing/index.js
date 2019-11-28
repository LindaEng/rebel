import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
class Pricing extends Component {


    state={
        prices:[5,10,20],
        positions:['Rebel! Early Bird','Melting ICE','Rebel! Queen'],
        descriptions:['Early bird pricing, congrats you caught the worm!','A portion of this ticket will be donated to our beneficiary','A larger portion of this ticket will be donated to our beneficiary'],
        linkto:['https://www.eventbrite.com/','https://www.eventbrite.com/','https://www.eventbrite.com/']
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.descriptions[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            bck="orange"
                            color="white"
                            link={this.state.linkto[i]}
                        />
                    </div>
                </div>
            </div>
        ))

        

        

    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Pricing;