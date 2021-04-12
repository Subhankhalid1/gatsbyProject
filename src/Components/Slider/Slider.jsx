import React from 'react';
import "./Slider.css";

const Slider = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="slider-main py-24">
         
            <div className="w-4/5 m-auto main-flex-slider">
            
                {
                    array && array.map((item, index) => {
                        return <div key={index}>
                            <img className="w-full h-full object-fill" src="\images\abc.png" alt="" />
                            <p className="para mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="mt-2 font-bold">$9.99</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Slider;
