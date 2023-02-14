import Card from "react-bootstrap/Card";
import "./style.css";

function Cards({ img }) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={img} className="img" />
    </Card>
  );
}

export default Cards;
