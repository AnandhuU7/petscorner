import { EditOutlined, ShoppingCartOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import React from "react";
import "./pet-card.css";

const { Meta } = Card;
interface Props {
    imageURL: string;
    name: string;
    description: string;
}
export function PetCard(props: Props) {
    function renderDescription() {
        return <div className='description'>{props.description}</div>;
    }
    return (
        <Card
            className='pet-card'
            style={{ width: 300 }}
            cover={<img alt='example' className="pet-card-image" src={props.imageURL} />}
            actions={[
                // <EditOutlined key='edit' />,
                // <InfoCircleOutlined key='setting' />,
                // <ShoppingCartOutlined key='ellipsis' />,
            ]}
        >
            <Meta title={props.name} description={renderDescription()} />
        </Card>
    );
}
