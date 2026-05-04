
import { useState } from "react";
import { Card } from "react-bootstrap";

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Img
          src={props.image_url}
          onClick={() => setFavorites(favorites + 1)}
        />

        <Card.Text>{props.description}</Card.Text>

        <Card.Text style={{ fontWeight: "bold" }}>
          Favorites: {favorites}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default HornedBeast;