import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const Production = () => {
  return (
    <Container className="view">
      <h2 className="text-center my-5">Üretim Aşamaları</h2>
      {/* <Row className="mb-5">
        <Col>
          <Card>
            <Image src={} alt="Birinci Aşama" fluid />
            <Card.Body>
              <Card.Title>Birinci Aşama</Card.Title>
              <Card.Text>
                Ürünlerimizin kalitesini artırmak için doğru seçilmiş tarım
                yöntemlerini kullanıyoruz.
              </Card.Text>
              <Button variant="primary">Daha Fazla Bilgi</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image src={} alt="Birinci Aşama" fluid />
            <Card.Body>
              <Card.Title>temizlik Aşama</Card.Title>
              <Card.Text>
                Ürünlerimizi hijyen standartlarına uygun olarak temizliyoruz.
              </Card.Text>
              <Button variant="primary">Daha Fazla Bilgi</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image src={} alt="pişirme Aşama" fluid />
            <Card.Body>
              <Card.Title>pişirme Aşama</Card.Title>
              <Card.Text>
                Ürünlerimizi hijyen standartlarına uygun olarak temizliyoruz.
              </Card.Text>
              <Button variant="primary">Daha Fazla Bilgi</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image src={} alt="kurutma Aşama" fluid />
            <Card.Body>
              <Card.Title>kurutma Aşama</Card.Title>
              <Card.Text>
                Ürünlerimizi hijyen standartlarına uygun olarak temizliyoruz.
              </Card.Text>
              <Button variant="primary">Daha Fazla Bilgi</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image src="/images/step2.jpg" alt="paketleme Aşama" fluid />
            <Card.Body>
              <Card.Title>paketleme Aşama</Card.Title>
              <Card.Text>
                Ürünlerimizi özenle seçerek paketliyoruz ve müşterilerimize
                güvenle ulaştırıyoruz.
              </Card.Text>
              <Button variant="primary">Daha Fazla Bilgi</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Image
              src="/images/step3.jpg"
              alt="gönderiye hazırlanma Aşama"
              fluid
            />
            <Card.Body>
              <Card.Title>gönderiye hazırlanma Aşama</Card.Title>
              <Card.Text>
                Müşteri memnuniyetini sağlamak için ürünlerimizi özenle saklıyor
                ve istekler doğrultusunda hazırlıyoruz.
              </Card.Text>
              <Button variant="primary">Daha Fazla Bilgi</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
      <Row>
        <Col>
          <h2 className="text-center my-5">Üretim Videoları</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="320"
              height="560"
              src="https://www.youtube.com/embed/Z_e7FKxWlS0?si=O6egAVEcWfbSguBJ"
              title="Kurutma"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Production;
