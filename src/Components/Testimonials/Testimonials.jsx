import React from 'react';
import "./Testimonial.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Testimonials = () => {
    const array = [1, 2, 3];
    return <>
        <div className="py-8">
            <h1 className="text-center text-3xl font-bold mb-10 mt-10">TESTIMOLIALS</h1>
            <div className="flex testi-flex ">
                {
                    array && array.map((item, index) => {
                        return <section className="text-gray-600 body-font main-testimonial overflow-hidden">
                            <div className="container py-2">
                                <div className="lg:w-4/5 flex border-setting">
                                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded img-star-resp" src="https://static.wixstatic.com/media/6459f0_278e8e934dbc4eda878d0580f6e9a98d~mv2.png/v1/fill/w_484,h_725,al_c,q_85,usm_0.33_1.00_0.00/richberry_front_with_feathers.webp" />
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0 py-3">
                                        <div className="flex mb-4 items-center">
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <span className="text-gray-600 ml-3">03/01/21</span>
                                        </div>
                                        <h1 className="text-lg font-bold">Lorem Ipsem</h1>
                                        <div className="p-div">
                                            <p className="leading-relaxed para">Fam locavore kickstarter distillery Fam locavore kickstarter distillery.</p>
                                        </div>
                                        <p> <strong>Lorem,p</strong></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    })
                }
            </div>
        </div>
    </>
}

export default Testimonials;
