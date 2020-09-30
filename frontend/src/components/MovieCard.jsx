import React from 'react';
import { Card } from 'antd';
import './MovieCard.css';

const { Meta } = Card;
export default function MovieCard({ id, title, image }) {
    return (
        <div className="card-wrapper">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={`${title}.jpg`} src={image} />}
            >
                <Meta title={title} />
            </Card>
        </div>
    );
}