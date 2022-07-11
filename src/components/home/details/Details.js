import Banner from './banner/Banner';
import Swipe from './swipe/Swipe';
import Card from './card/Card';
import React from 'react';
import './Details.css';

function Details() {
    return (
        <div className='details'>
            <Banner />
            <div className='card-container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Swipe />
        </div>
    )
}

export default Details