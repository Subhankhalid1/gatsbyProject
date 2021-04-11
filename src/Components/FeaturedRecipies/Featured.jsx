import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FeaturedRecipe = () => {
    return (
        <div style={{ backgroundColor: "#f4f4f4" }}>
            <div className="p-rel m-auto flex justify-between items-center">
                <h1 className="blog-head">FEATURED RECIPES</h1>

            </div>
            <div className="p-rel m-auto flex justify-between items-center">
                <p style={{paddingTop:'2rem', paddingBottom:'2rem', fontSize:'1.5rem', fontFamily:'bold'}}>Looking for some tasty recipe inspiration?
                Browse through our collection of easy recipes.
                    </p>

            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-4 py-16 mx-auto">
                    <div className="flex flex-wrap -m-6">
                        <div className="p-4 md:w-1/3 blog-card-div">
                            <div className="relative h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="lg:h-72 md:h-36 w-full object-cover object-center" src="/images/image3.png" alt="blog" />
                                <div className="p-12 bg-white shadowbox">
                                    <h1 className=" text-lg font-medium text-black-1000 mb-5" style={{ fontSize: '2rem' }}>The 400 Blows</h1>
                                    <p className="leading-relaxed mb-5 para">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <div className="bg-white absolute top-5 py-3 px-10 font-bold text-2xl right-5" style={{ borderRadius: "2rem" }}>
                                    Time
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 blog-card-div">
                            <div className="relative h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="lg:h-72 md:h-36 w-full object-cover object-center" src="/images/image4.png" alt="blog" />
                                <div className="p-12 bg-white shadowbox">
                                    <h1 className=" text-lg font-medium text-black-1000 mb-5" style={{ fontSize: '2rem' }}>The 400 Blows</h1>
                                    <p className="leading-relaxed mb-5 para">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <div className="bg-white absolute top-5 py-3 px-10 font-bold text-2xl right-5" style={{ borderRadius: "2rem" }}>
                                    Time
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 blog-card-div">
                            <div className="relative h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                                <img className="lg:h-72 md:h-36 w-full object-cover object-center" src="/images/image5.png" alt="blog" />
                                <div className="p-12 bg-white shadowbox">
                                    <h1 className=" text-lg font-medium text-black-1000 mb-5" style={{ fontSize: '2rem' }}>The 400 Blows</h1>
                                    <p className="leading-relaxed mb-5 para">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <div className="bg-white absolute top-5 py-3 px-10 font-bold text-2xl right-5" style={{ borderRadius: "2rem" }}>
                                    Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedRecipe;