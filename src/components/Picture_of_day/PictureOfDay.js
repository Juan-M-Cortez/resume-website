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

            <CardBody>
                <CardTitle tag="h5">
                    {apodData.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                    {apodData.copyright}
                </CardSubtitle>
            </CardBody>
            
            <img alt="Card cap" src={apodData.url} width="100%" id='img-of-day'/>
            
            {/*------------Carousel for pics------------*/}
          
            {/*
            <Carousel
                activeIndex={0}
                next={function noRefCheck() { }}
                previous={function noRefCheck() { }}
            >
                <CarouselIndicators
                    activeIndex={0}
                    items={[
                        {
                            altText: 'Slide 1',
                            caption: 'Slide 1',
                            key: 1,
                            src: 'https://picsum.photos/id/123/1200/600'
                        },
                        {
                            altText: 'Slide 2',
                            caption: 'Slide 2',
                            key: 2,
                            src: 'https://picsum.photos/id/456/1200/600'
                        },
                        {
                            altText: 'Slide 3',
                            caption: 'Slide 3',
                            key: 3,
                            src: 'https://picsum.photos/id/678/1200/600'
                        }
                    ]}
                    onClickHandler={function noRefCheck() { }}
                />
                <CarouselItem
                    onExited={function noRefCheck() { }}
                    onExiting={function noRefCheck() { }}
                >
                    <img
                        alt="Slide 1"
                        src="https://picsum.photos/id/123/1200/600"
                    />
                    <CarouselCaption
                        captionHeader="Slide 1"
                        captionText="Slide 1"
                    />
                </CarouselItem>
                <CarouselItem
                    onExited={function noRefCheck() { }}
                    onExiting={function noRefCheck() { }}
                >
                    <img
                        alt="Slide 2"
                        src="https://picsum.photos/id/456/1200/600"
                    />
                    <CarouselCaption
                        captionHeader="Slide 2"
                        captionText="Slide 2"
                    />
                </CarouselItem>
                <CarouselItem
                    onExited={function noRefCheck() { }}
                    onExiting={function noRefCheck() { }}
                >
                    <img
                        alt="Slide 3"
                        src="https://picsum.photos/id/678/1200/600"
                    />
                    <CarouselCaption
                        captionHeader="Slide 3"
                        captionText="Slide 3"
                    />
                </CarouselItem>
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={function noRefCheck() { }}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={function noRefCheck() { }}
                />
            </Carousel>
            */}
            {/*------------Carousel end------------*/}

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
