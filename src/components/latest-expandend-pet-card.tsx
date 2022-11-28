import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Col, message, Popover, Rate, Row, Space } from "antd";
import moment from "moment";
import React, { useContext } from "react";
import { GlobalContext } from "../contexts/global.context";
import { deleteSellItem, updateRating } from "../services/sell.service";
import { IRating, IRatingParams } from "../types/sell.types";
import { getAverageRating } from "../utils/rating.utils";
import "./latest-expandend-pet-card.css";
interface Props {
    name: string;
    type: string;
    date: Date;
    description: string;
    contactus: string;
    imageURL: string;
    rate: boolean;
    id: string;
    delete: boolean;
    rating: IRating;
    forceUpdateList: () => void;
}

export function LatestExpandendPetCard(props: Props) { 
    const { user } = useContext(GlobalContext);

    async function deleteItem(id: string) {
        try {
            await deleteSellItem(id);
            message.success("Sell item has been deleted successfully!");
            props.forceUpdateList && props.forceUpdateList();
        } catch (err) {
            console.log(err);
            message.error("Failed to delete sell item!");
        }
    }

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
                            <div className={"value"}>{moment(props.date).format("DD-MM-YYYY hh:mm:ss A")}</div>
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
                        <div>
                            
                            {props.rate && (
                                <div className='rating-wrapper'>
                                    <Rate disabled allowHalf defaultValue={getAverageRating(props.rating)} />
                                {user && !user.isAdmin &&
                                    <RatingPopover
                                        rating={props.rating}
                                        forceUpdateList={props.forceUpdateList}
                                        itemId={props.id}
                                    />
                                }
                                </div>
                            )}
                            {props.delete && (
                                <div className='delete'>
                                    <Button onClick={() => deleteItem(props.id)} danger>
                                        <DeleteOutlined />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

interface IRatingProps {
    itemId: string;
    forceUpdateList: () => void;
    rating: IRating;
}

function RatingPopover(props: IRatingProps) {
    async function onUpdateRating(value: number) {
        const ratingData: IRatingParams = {
            id: props.itemId,
            value: value,
        };
        try {
            await updateRating(ratingData);
            message.success("Thanks for your valueable feedback!");
            props.forceUpdateList && props.forceUpdateList();
        } catch (err) {
            console.log(err);
            message.error("Failed to update the review!");
        }
    }

    function renderContent() {
        return (
            <div>
                <Rate onChange={onUpdateRating} defaultValue={0} />
            </div>
        );
    }
    return (
        <Popover content={renderContent()}>
            <Button type='primary'>Rate Now</Button>
        </Popover>
    );
}
