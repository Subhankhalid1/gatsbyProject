import React from 'react';
import "./Social.css";

import img1 from "./image/1.jpg";
import img2 from "./image/2.jpg";
import img3 from "./image/4.jpg";
import img4 from "./image/download.jpg";


const Social = () => {


    return (
        <div className="social-main">
            <div className="w-full text-center pt-3 pb-5">
                <h1 className="head-social">LET'S BE SOCIAL</h1>
                <p className="para">Follow us on social media: @richberry.ph</p>
            </div>

            <section className="lg:mt-14 sm:mt-5 w-4/5 pt-14 flex w-full section-responsive" style={{ height: "auto" }}>
                <div data-sal="slide-up" data-sal-delay="800" data-sal-easing="ease-out-back" className="social-main1   grow">

                </div>
                <div className="image-social grow" style={{ height: "auto" }}>
                    <div className="container mx-auto px-8" style={{ height: "auto" }}>
                        <div className="flex flex-wrap justify-center -m-4" style={{ height: "auto" }}>
                            <div className="lg:w-1/4 img-socl md:w-1/2 p-4 w-full flex-1" data-sal="slide-left" data-sal-delay="1000" data-sal-easing="ease-out-back">
                                <a className="block  relative h-49 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover image-social-res object-center w-full h-full block" src="/images/image7.png" />
                                </a>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex-1">
                                <a className="block relative h-49 rounded overflow-hidden" data-sal="slide-right" data-sal-delay="1000" data-sal-easing="ease-out-back">
                                    <img alt="ecommerce" className="object-cover image-social-res object-center w-full h-full block" src="/images/image8.png" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex-1" data-sal="slide-left" data-sal-delay="1000" data-sal-easing="ease-out-back">
                                <a className="block relative h-49 rounded overflow-hidden" >
                                    <img alt="ecommerce" className="object-cover image-social-res object-center w-full h-full block" src="/images/image6.png" />
                                </a>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex-1" data-sal="slide-right" data-sal-delay="1000" data-sal-easing="ease-out-back">
                                <a className="block relative h-49 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover image-social-res object-center w-full h-full block" src="/images/image9.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Social;