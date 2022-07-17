import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

export function HomeCarousel() {
    return (
        <Carousel className='carousel' autoplay draggable arrows={true} autoplaySpeed={1000}>
            <img
                className='carousel-image'
                src='https://cdn.shopify.com/s/files/1/1199/8502/files/cat-scratchers-web_1400x.jpg?v=1655997422'
                alt=''
            />
            <img
                className='carousel-image'
                src='https://cdn.shopify.com/s/files/1/1199/8502/files/Fresh-Foods-Web-Size_2000x.jpg?v=1647342942'
                alt=''
            />
            <img
                className='carousel-image'
                src='https://cdn.shopify.com/s/files/1/1199/8502/files/web--1_1400x.jpg?v=1655736369'
                alt=''
            />
            <img
                className='carousel-image'
                src='https://cdn.shopify.com/s/files/1/1199/8502/files/Web-Raw-Bites-v1_1400x.jpg?v=1652272830'
                alt=''
            />
        </Carousel>
    );
}
