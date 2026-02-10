import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Page1 = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h1>Welcome to Page 1</h1>
          <p>This is the content for Page 1.</p>
        </Col>
        <Col md={6}>
          <img src="page1-image.jpg" alt="Page 1" />
        </Col>
      </Row>
    </Container>
  );
};

export default Page1;
# Auto improvement by Melius