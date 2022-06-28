import { 
    CardGroup, Card, CardImg,
    CardBody, CardTitle, CardSubtitle,
    CardText, Button
} from 'reactstrap'
import React from 'react'

export default function ApodCardGroup() {
    return (
    <>
        <CardGroup>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://apod.nasa.gov/apod/image/2206/Veil_Stocks_1080.jpg"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
            
        </CardGroup>
        <CardGroup>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://apod.nasa.gov/apod/image/2206/NGC6744_chakrabarti1024R.jpg"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
            
        </CardGroup>
        <CardGroup>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src="https://apod.nasa.gov/apod/image/2206/V838Mon_Hubble_960.jpg"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
            
        </CardGroup>
        </>
    )
}
