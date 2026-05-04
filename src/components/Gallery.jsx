import HornedBeast from "./HornedBeast";
import { Container, Row, Col } from "react-bootstrap";

function Gallery({ items }) {
  return (
    <Container>
      <h1>Gallery</h1>
      <Row>
        {items.map((beast) => (
          <Col key={beast._id} xs={12} md={6} lg={4}>
            <HornedBeast
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;