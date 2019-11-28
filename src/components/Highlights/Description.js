import React from 'react';
import Fade from 'react-reveal/Fade';


const Description = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2><img src={require("../../resources/images/Rebel_About.png")} alt="" height="400"/></h2>
                <div className="highlight_description">
                we rebel! for our queer sisters.<br/>
                we rebel! for our trans siblings.<br/>
                we rebel! for our poc.<br/>
                we rebel! for our sex workers.<br/>
                we rebel! for our immigrants.<br/>
                we rebel! for the forgotten.<br/>
                we rebel! for the right to exist.<br/>
                                     
                </div>
            </div>
        </Fade>
    );
};

export default Description;