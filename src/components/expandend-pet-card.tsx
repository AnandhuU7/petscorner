import { Card, Col, Row, Space } from "antd";
import React from "react";
import "./expandend-pet-card.css";

interface Props {
    name: string;
    origin: string;
    lifeExpectancy: {
        from: number;
        to: number;
    };
    breedHighlight: string;
    imageURL: string;
    breedAppearance: string;
}
export function ExpandendPetCard(props: Props) {
    return (
        <div className={"expandend-pet-card"}>
            <Row gutter={24}>
                <Col span={10} className={"expandend-image-wrapper"}>
                    <img className={"expandend-card-image"} alt={props.name} src={props.imageURL} />
                </Col>
                <Col span={14}>
                    <div className='info-list'>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Name</b>
                            </div>
                            <div className={"value"}>:{props.name}</div>
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Origin</b>
                            </div>
                            <div className={"value"}>:{props.origin}</div>
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Life Expectancy</b>
                            </div>
                            <div className={"value"}>
                                :{props.lifeExpectancy.from} - {props.lifeExpectancy.to} years
                            </div>
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Breed Highlight</b>
                            </div>
                            <div className={"value"}>:{props.breedHighlight}</div>
                        </div>
                        <div className='item'>
                            <div className={"label"}>
                                <b>Breed Appearance</b>
                            </div>
                            <div className={"value"}>:{props.breedAppearance}</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
