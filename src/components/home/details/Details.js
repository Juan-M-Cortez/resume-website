import certData from '../../../Certificate-Data';
import Banner from './banner/Banner';
import CardSwipe from './swipe/CardSwipe';
import Card from './card/Card';
import React from 'react';
import './Details.css';

function Details() {

    function CertificateLoop() {
        return certData.map((elem, index) => {
            return (
                <Card url={certData[index].url} tittle={certData[index].language} key={`card-${index}`}
                    img={certData[index].img} content={certData[index].content} id={certData[index].id} />
            )
        })
    }

    return (
        <div className='details'>
            <Banner />
            <div className='details-div-h1'>
                <h1 className='details-h1'>My Certificates </h1>
            </div>
            <div className='card-container'>
                {CertificateLoop()}
            </div>
        </div>
    )
}

export default Details