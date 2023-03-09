import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import salca from "../Image/salca.jfif";
import pisirme from "../Image/yapım.jfif";
import kurutma from "../Image/kuruta.jfif";

function Home() {
  return (
    <div>
      <header className="d-flex justify-content-center">
        <Container fluid className="bg-light p-3 m-5">
          <h1>Arska Çiftlik</h1>
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block" src={salca} alt="First slide" />
                <Carousel.Caption>
                  <h3>Welcome to our natural food store</h3>
                  <p>Explore our range of organic products</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={kurutma}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Fresh fruits and vegetables</h3>
                  <p>Choose from our selection of locally sourced produce</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={pisirme}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Healthy and delicious snacks</h3>
                  <p>Find the perfect snack for your active lifestyle</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </Container>
      </header>
      <main>
        <Container className="my-5">
          <h2 className="text-center">Yeni Ürünler</h2>
          <Row className="mt-3">
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                />
                <Card.Body>
                  <Card.Title>Ürün 1</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce iaculis orci id purus ullamcorper pretium.
                  </Card.Text>
                  <Button variant="primary">Satın Al</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                />
                <Card.Body>
                  <Card.Title>Ürün 2</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce iaculis orci id purus ullamcorper pretium.
                  </Card.Text>
                  <Button variant="primary">Satın Al</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                />
                <Card.Body>
                  <Card.Title>Ürün 3</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce iaculis orci id purus ullamcorper pretium.
                  </Card.Text>
                  <Button variant="primary">Satın Al</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Home;
