import React from 'react';

import "./Dolor.css";

const DolorSip = () => {
    return (
        <section className="text-gray-1000 body-font overflow-hidden py-10 w-full m-auto ">
            <div className="container py-24 mx-auto container-resp">
                <div className="lg:w-full dolor-container mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full  lg:pr-12 lg:py-6 mb-6 lg:mb-0 border- flex items-center flex-col justify-center">
                        <h1 className="text-black-1000 heading text-5xl font-medium mb-4">Lorem ipsem dolor sit</h1>
                        <p className="leading-relaxed text-3xl mb-4 para para-dolor text-justify pt-12" >
                            Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                         XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn.
                          Everyday carry +1 seitan poutine tumeric. 
                          Gastropub blue bottle austin listicle pour-over, neutra jean.
                          Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                         XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn.
                          Everyday carry +1 seitan poutine tumeric. 
                          Gastropub blue bottle austin listicle pour-over, neutra jean</p>
                        <div className="w-full hide btn-learn btn-lrn">
                            <button style={{ width: "60%" }} className="miracle-btn py-3">Learn More</button>
                        </div>
                    </div>
                    <div className=" w-1/2 img-container ">
                        <img className="img-logo" alt="ecommerce" src="/images/Berry_halves.png" />
                    </div>
                    <div className="w-full btn-learn btn-lrn dolor-button">
                        <button style={{ width: "40%" }} className="miracle-btn py-3">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DolorSip;
