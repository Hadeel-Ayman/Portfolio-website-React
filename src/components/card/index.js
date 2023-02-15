import Card from "react-bootstrap/Card";
import "./style.css";

function Cards({ img }) {
  return <Card.Img variant="top" src={img} className="img" />;
}

export default Cards;
