import React from 'react';
import "./Blog.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";

const Blogs = () => {
    return (
        <div style={{ backgroundColor: "#f4f4f4" }}>
            <div className="p-rel m-auto flex justify-between items-center">
                <h1 className="blog-head title-heading">LATEST FROM OUR BLOG</h1>
                <p className="para para2 para">VIEW ALL</p>
            </div>
            <section className="text-black-600 body-font">
                <div className="container px-8 py-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3 blog-card-div">
                            <div className="h-full border-2 border-black-200  overflow-hidden">
                                <img className="lg:h-72 md:h-36 w-full object-cover object-center" src="/images/image.png" alt="blog" />
                                <div className="p-12 bg-white shadowbox">
                                    <h1 className=" text-lg font-medium text-black-1000 mb-5" style={{ fontSize: '2rem' }}>The Catalyzer</h1>
                                    <p className="leading-relaxed mb-3 para">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 para2 para">Read More
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 blog-card-div">
                            <div className="h-full border-2 border-black-200  overflow-hidden">
                                <img className="lg:h-72 md:h-36 w-full object-cover object-center" src="/images/image1.png" alt="blog" />
                                <div className="p-12 bg-white shadowbox">
                                    <h1 className=" text-lg font-medium text-black-1000 mb-5" style={{ fontSize: '2rem' }}>The 400 Blows</h1>
                                    <p className="leading-relaxed mb-3 text-bold para">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                        <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 para2 para">Read More
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 blog-card-div">
                            <div className="h-full border-2 border-black-200 overflow-hidden">
                                <img className="lg:h-72 md:h-36 w-full object-cover object-center" src="/images/image2.png" alt="blog" />
                                <div className="p-12 bg-white shadowbox">
                                    <h1 className=" text-lg font-medium text-black-1000 mb-5" style={{ fontSize: '2rem' }}>Shooting Stars</h1>
                                    <p className="leading-relaxed mb-3 para">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 para2 para">Read More
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs;