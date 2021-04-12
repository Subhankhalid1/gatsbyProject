import React, { useState } from 'react';
import "./Header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

    const [show, setShow] = useState(false);


    return <>
        <div className="header-section position-relative ">
            <header class="text-gray-600 body-font">
                <div class=" mx-auto pt-8 flex flex-wrap p-5 img-container flex-col ml-5 md:flex-row items-center">
                    <a class="flex logodiv title-font font-medium  items-center text-gray-900 mb-4 md:mb-0">
                        {/* <span class="ml-3 text-xl text-white">Richberry</span> */}
                        <img style={{ width: "160px" }} className="image-logo mr-10" src="/images/logos.png" alt="First slide" />
                        <div className="bar-icons text-xl text-white">
                            <FontAwesomeIcon className="showonmbl mr-4" icon={faShoppingCart} size="mx-3 ml-3" />
                            {/* <FontAwesomeIcon icon={faUser} size="mx-3 ml-3" /> */}
                            <FontAwesomeIcon onClick={showNav => setShow(!show)} className="bars " icon={faBars} size="mx-3 ml-3" />
                        </div>
                    </a>
                    {
                        !show &&
                        <nav id="nav" class="md:mr-auto md:ml-14 md:py-1 md:pl-24 lg:font-bold lg:text-lg flex items-center text-base justify-center">
                            <a class="mr-14 hover:text-gray-900 text-2xl text-white">Home</a>
                            <a class="mr-14 hover:text-gray-900 text-2xl text-white">About</a>
                            <a class="mr-14 hover:text-gray-900 text-2xl text-white">Recipies</a>
                            <a class="mr-14 hover:text-gray-900 text-2xl text-white">Shop</a>
                            <a class="mr-14 hover:text-gray-900 text-2xl text-white">Blog</a>
                            <a class="mr-14 hover:text-gray-900 text-2xl text-white">Contact</a>
                        </nav>
                    }

                    {
                        show && <nav class="md:mr-auto nav-item md:ml-4 md:py-1 md:pl-24 md:border-gray-400 lg:font-bold lg:text-lg	flex flex-wrap items-center text-base justify-center">
                            <a class="mr-8 hover:text-gray-900 padd text-white">Home</a>
                            <a class="mr-8 hover:text-gray-900 padd text-white">About</a>
                            <a class="mr-8 hover:text-gray-900 padd text-white">Recipies</a>
                            <a class="mr-8 hover:text-gray-900 padd text-white">Shop</a>
                            <a class="mr-8 hover:text-gray-900 padd text-white">Blog</a>
                            <a class="mr-8 hover:text-gray-900 padd text-white">Contact</a>

                        </nav>
                    }


                    <div id="2" className="login-div mr-8">
                        <div className="flex hide lg:font-bold lg:text-lg items-center borderright pr-5 text-white ">
                            <p className="text-xl">Login</p>
                            {/* <i className="fa fa-user ml-3"></i> */}
                            <FontAwesomeIcon icon={faUser} size="mx-3 ml-3" className="fa-lg" />
                        </div>

                        <div className="flex hide items-center text-white lg:font-bold lg:text-lg"  >
                            <FontAwesomeIcon icon={faShoppingCart} size="mx-3 ml-3" className="fa-lg" />
                            <p className="ml-3 text-xl">$9.99</p>
                            {/* <i className="fa fa-shopping-cart mx-3 "></i> */}
                        </div>
                    </div>
                </div>
            </header>
            {/* navbar end */}
            <div className=" section-main  w-11/12 m-auto" >
                <div className="header-s1  text-center" data-sal="slide-left"  data-sal-easing="easy" >
                <img className=" image translate" src="/images/abc.png"/>
                <img  className=" image-height z-10" src="/images/abc.png"/>
                <img className="image translate1" src="/images/abc.png"/>
                </div>
                {/* <div className="header-s1 border text-center" data-sal="slide-left" data-sal-delay="600" data-sal-easing="ease-out-back" >
                    <img className=" image translate" src="/images/abc.png" alt="" style={{width:'100%',height:'auto'}}/>
                    <img className="image image-height z-10" src="/images/abc.png" alt="" style={{width:'100%',height:'auto'}} />
                    <img className="image translate1" src="/images/abc.png" alt="" style={{width:'100%',height:'auto'}}/>
                </div> */}
                <div className=" header-s2  pb-10"   >
                    <p className="paragraph font-bold py-4">When life gives you</p>
                    <h1 className="bold-heading ">RICHBERRY,</h1>
                    <p className="paragraph font-bold py-4">make some</p>
                    <h1 className="bold-heading ">LEMONADE.</h1>
                    <p className="paragraph font-bold py-4">it'll make it sweet without adding sugar.</p>
                    <button className="main-btn">Learn More</button>
                </div>

            </div>
                <img className="cha-img" src="/images/Chat.png" alt=""/>
        </div>

    </>
}

export default Header;