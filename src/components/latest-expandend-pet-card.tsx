import { Card, Col, Rate, Row, Space } from "antd";
import React from "react";
import "./latest-expandend-pet-card.css";
interface Props {
    name: string;
    type: string;
    date:Date;
    description: string;
    contactus: string;
    imageURL: string;
    
}
                      

export function LatestExpandendPetCard(props: Props) {
    return (
        
        <div className={"latest-expandend-pet-card"}>
            <Row gutter={24}>
                <Col span={10} className={"expandend-image-wrapper"}>
                    <img className={"expandend-card-image"} alt={props.name} src={props.imageURL} />
                </Col>
                <Col span={14}>
                    <div className='info-list'>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Breed Name</b>
                            </div>
                            <div className={"value"}>:{props.name}</div>
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Type</b>
                            </div>
                            <div className={"value"}>:{props.type}</div>
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Date</b>
                            </div>
                            {/* <div className={"value"}>:{props.date}</div>  */}
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Description</b>
                            </div>
                            <div className={"value"}>:{props.description}</div>
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Contact Us</b>
                            </div>
                            <div className={"value"}>:{props.contactus}</div>
                        </div>
                        <div className="rate">
                            <div>
                                <Rate defaultValue={0} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
