import React from 'react';
import {
    Card, CardBody, CardTitle, CardSubtitle,
    CardText, CardLink, Carousel, CarouselIndicators,
    CarouselItem, CarouselCaption, CarouselControl

} from 'reactstrap';
import ApodCarousel from '../apod_carousel/ApodCarousel';
import './PictureOfDay.css';


export default function PictureOfDay(props) {
    const { apodData, imgSize, urlTodaysPic } = props;
    console.log('PictureOfTheDay: ', urlTodaysPic);
    return (
        <Card>
            <CardBody id='apod-id'>
                <CardTitle tag="h5">
                    {apodData.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                    {apodData.copyright}
                </CardSubtitle>
            </CardBody>

            <img alt="Card cap" src={apodData.url} width="100%" id='img-of-day' />

            <CardBody>
                <CardText style={{ width: `${imgSize === 0 ? `70%` : `${imgSize + 14}px`}` }}>
                    {apodData.explanation}
                </CardText>
                {/*🔗------Extra Links------🔗
                    <CardLink href="#">
                        Card Link
                    </CardLink>
                    <CardLink href="#">
                        Another Link
                    </CardLink>
                    */}
            </CardBody>
        </Card>
    )
}
