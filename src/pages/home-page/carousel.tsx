import { Carousel } from "antd";
import React from "react";
import  slider1 from "../../assets/images/slider2.png";
import  slider2 from "../../assets/images/slider1.png"

const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

export function HomeCarousel() {
    return (
        <Carousel className='carousel' autoplay draggable arrows={true} autoplaySpeed={2000}>
            <img
                className={"slider2"}
                src={slider2} alt=''
               
            />
            <img
                className={"slider1"}
                src={slider1} alt=''
            />
              {/* <img
                 className='carousel-image'
                 src='/home/anandhu/projects/petscorner/src/assets/images/slider1.png'
                 alt=''
            /> */}
            {/* <img
                className='carousel-image'
                src='https://cdn.shopify.com/s/files/1/1199/8502/files/Web-Raw-Bites-v1_1400x.jpg?v=1652272830'
                alt=''
            />    */}
        </Carousel>
    );
}
