import React from 'react';
import Header from '../Header/Header'
import Miracle from '../MiracleSection/Miracle';
import Video from '../VideoComp/Video';
import Blogs from '../Blogs/Blogs';
import Social from '../SocialComp/Social';
import FeaturedRecipe from '../FeaturedRecipies/Featured';
import DolorSip from '../DolorSip/DolorSip';
import RichUse from '../UseRichBerry/RichUse';
import Testimonials from '../Testimonials/Testimonials';
import ShopLinks from '../ShopLinks/ShopLinks';
import Slider from '../Slider/Slider';

const Container = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Header />
            <Miracle />
            <Video />
            <DolorSip />
            <FeaturedRecipe />
            <RichUse />
            <Blogs />
            <Testimonials />
            <Slider />
            <Social />
            <ShopLinks />
        </div>
    )
}

export default Container;
