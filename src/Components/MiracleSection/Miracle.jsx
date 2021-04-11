import React from 'react';
import "./Miracle.css";

const Miracle = () => {
    return <>
        <div className="flex justify-between w-11/12 m-auto pb-1 first-miracle">
            <div className="miracle-ist-div ">
                <p className="para">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric.
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric.
                </p>
            </div>

            <div className="miracle-ist-div1" >
                <img className="mir-img" alt="ecommerce" src="https://riwvt.com/static/596b1ae23f536c0a8c485217c6423c86/4e25e/fruit-double.webp" alt="First slide"  />
            </div>
        </div>

        <div className="second-miracle" >
            <div className="flex justify-center w-11/12 m-auto flex-row-reverse second-miracle-responsive">
                <div className="miracle-ist-div2 flex-col width-40" >
                    <div className="heading-miracle">
                        <h1>MIRACLE BERRY</h1>
                    </div>
                    <p className="para">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
                    Fam locavore kickstarter distillery. Mixtape chillwave tumeric.
                    </p>
                    <div className="w-full btn-learn">
                        <button className="miracle-btn">Learn More</button>
                    </div>
                </div>
             

                <div className="miracle-ist-div3 width-60" >
                    <img className="mir-img"  alt="ecommerce" src="/images/sign.png" alt="First slide" style={{marginTop:'-15%', marginBottom:'5%'}}/>
                </div>
            </div>
        </div>
    </>
}

export default Miracle;
