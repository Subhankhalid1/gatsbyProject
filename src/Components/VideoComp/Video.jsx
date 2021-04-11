import React from 'react';
// import ReactPlayer from 'react-player';
import './Video.css'
import richberry from '../../video/richberry.mp4'

const Video = () => {


    return (
        <div className=" video flex justify-center items-center" data-sal="zoom-in" data-sal-delay="1200" data-sal-easing="ease-out-back">

            <div className="w-1/2 h-1/2 m-auto position-relative" >
                <img className="w-full h-full object-fill" src="https://media.istockphoto.com/photos/silver-laptop-picture-id483803142?k=6&m=483803142&s=612x612&w=0&h=jm7qKgUucumsv-_sQw3g4nyJ2BmfRxl9s2_oU8RM1_8=" alt="" />
                <div  className="component" >
                    <video  className="w-full h-full object-fill" controls={true} >
                        <source src={richberry} type="video/mp4" />
                    </video>
                </div>

            </div>



        </div>
    )
}

export default Video;
