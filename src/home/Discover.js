import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

// Takes in props representing information about user's book want list (wantList, addtoWantList, isOnList, 
// setIsOnList)
function Discover(props) {
    let handleClick = (book) => {
        props.addToWantList(book);
        let newIsOnList = { ...props.isOnList };
        newIsOnList[book] = true;
        props.setIsOnList(newIsOnList);
    }

    return (
        <div>
            <div className="mx-auto discover-books text-center font-weight-bold display-5"> Discover books to trade for </div>
            <div className="mx-auto recently-listed text-center font-weight-normal display-5 mt-3 mb-4"> Recently listed </div>
            <Container>
                <Row>
                    <Col xs={8} className="mx-auto">
                        <div className="carousel-discover">
                            <Carousel>
                                <Carousel.Item>
                                    <div>
                                        <div className="pt-3 carousel-title">
                                            Building Java Programs
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <img
                                                className="d-block mx-auto carousel-img"
                                                src="img/Java-textbook.jpg"
                                                alt="Second slide"
                                            />
                                        </div>
                                        <div className="carousel-button pb-5">
                                            <Button variant="secondary" onClick={() => handleClick("Building Java Programs")} disabled={props.isOnList["Building Java Programs"]}>{!props.isOnList["Building Java Programs"] ? 'Add to Books I want' : 'Added to Books I want'}</Button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div>
                                        <div className="pt-3 carousel-title">
                                            Six of Crows
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <img
                                                className="d-block mx-auto carousel-img"
                                                src="img/Six-of-Crows.jpeg"
                                                alt="Second slide"
                                            />
                                        </div>
                                        <div className="carousel-button pb-5">
                                            <Button variant="secondary" onClick={() => handleClick("Six of Crows")} disabled={props.isOnList["Six of Crows"]}>{!props.isOnList["Six of Crows"] ? 'Add to Books I want' : 'Added to Books I want'}</Button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div>
                                        <div className="pt-3 carousel-title">
                                            Illuminae
                                        </div>
                                        <div className="pt-2 pb-3">
                                            <img
                                                className="d-block mx-auto carousel-img"
                                                src="img/Illuminae-cover.jpg"
                                                alt="Third slide"
                                            />
                                        </div>
                                        <div className="carousel-button pb-5">
                                            <Button variant="secondary" onClick={() => handleClick("Illuminae")} disabled={props.isOnList["Illuminae"]}>{!props.isOnList["Illuminae"] ? 'Add to Books I want' : 'Added to Books I want'}</Button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Discover;