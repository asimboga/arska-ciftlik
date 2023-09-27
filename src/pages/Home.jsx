import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import cekilis from "../Image/cekilis.mp4";
import yapim from "../Image/yapim.mp4";
import afiyet from "../Image/afiyet.mp4";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleVideoEnded = () => {
    const nextIndex = (activeIndex + 1) % 3;
    setActiveIndex(nextIndex);
    const nextVideo = document.getElementById(`video${nextIndex + 1}`);
    nextVideo.play();
  };

  useEffect(() => {
    const firstVideo = document.getElementById("video1");
    firstVideo.play();
  }, []);

  // Ekran genişliğine göre video boyutlarını ayarla
  const videoWidth = window.innerWidth < 768 ? 320 : 800;
  const videoHeight = (videoWidth / 16) * 9;

  return (
    <div className="view">
      <header className="d-flex justify-content-center">
        <Container fluid className="bg-purple p-3 ">
          <h1 className="d-flex justify-content-center align-items-center">
            Doğal Ürünlerin Adresi: Arska Çiftlik
          </h1>
          <Carousel
            id="video-carousel-example"
            fade
            controls={false}
            ref={carouselRef}
            interval={false}
            activeIndex={activeIndex}
            onSelect={() => {}}
            className="text-center"
          >
            <Carousel.Item>
              <video
                id="video1"
                width={videoWidth}
                height={videoHeight}
                controls
                onEnded={handleVideoEnded}
                autoPlay
                muted
              >
                <source src={cekilis} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Carousel.Item>
            <Carousel.Item>
              <video
                id="video2"
                width={videoWidth}
                height={videoHeight}
                controls
                onEnded={handleVideoEnded}
                autoPlay
                muted
              >
                <source src={yapim} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Carousel.Item>
            <Carousel.Item>
              <video
                id="video3"
                width={videoWidth}
                height={videoHeight}
                controls
                onEnded={handleVideoEnded}
                autoPlay
                muted
              >
                <source src={afiyet} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
