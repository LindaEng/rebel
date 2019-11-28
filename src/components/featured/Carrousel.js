import React from 'react';
import Slider from "react-slick";
import rebel1 from '../../resources/images/rebel1.png';
import rebel2 from '../../resources/images/rebel2.png';
import rebel3 from '../../resources/images/rebel3.png';



const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
      }
    return (
        <div
            className="carrousel_wrapper"
            style={{

                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider {...settings}> 
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${rebel1})`,
                            height:`${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>
                <div>
                <div
                        className="carrousel_image"
                        style={{
                            background:`url(${rebel2})`,
                            height:`${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>
                <div>
                <div
                        className="carrousel_image"
                        style={{
                            background:`url(${rebel3})`,
                            height:`${window.innerHeight}px`
                        }}
                    >

                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;