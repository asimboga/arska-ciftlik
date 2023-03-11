import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="container-fluid view">
      <Row>
        <Col md={6} className="p-5 text-center align-items-center justify-content-center">
          <Image src="https://via.placeholder.com/350x150" fluid />
        </Col>
        <Col md={6}>
          <h2 className="text-center">Hakkımızda</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales feugiat mauris, eget tincidunt orci viverra nec. Nullam ultrices risus a elementum vestibulum. Nulla vitae turpis id nisi congue consequat eu vel velit. Sed at ornare urna. Fusce tincidunt auctor mauris, sit amet maximus ipsum tincidunt ac. Maecenas congue eros non leo ultrices bibendum. Mauris vel urna massa.</p>
          <p>Aenean eget velit ut mi ultrices convallis ac vel quam. Sed mollis, massa eu dictum tempor, magna quam consectetur massa, vitae fermentum arcu ex a elit. In iaculis tincidunt odio, sit amet ultrices ante dictum eu. Nunc ullamcorper tincidunt enim, nec efficitur dolor faucibus vel. Donec eu ipsum lobortis velit dictum pharetra. Maecenas venenatis commodo mi, quis vulputate mauris mollis nec.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
