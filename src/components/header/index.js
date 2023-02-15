import { Navbar, Nav, Container } from "react-bootstrap";
import Buttons from "../Button";
import "./style.css";
import icon1 from "../../assets/images/nav-icon1.svg";
import icon2 from "../../assets/images/nav-icon2.svg";
import icon3 from "../../assets/images/nav-icon3.svg";
import logo from "../../assets/images/logo.svg";
import Icon from "../Icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container">
            <Link to={"main"} className="text-light">
              Home
            </Link>
            <Link to={"skills"} className="text-light">
              Skills
            </Link>
            <Link to={"projects"} className="text-light">
              Projects
            </Link>
            <Link to={"courses"} className="text-light">
              Courses
            </Link>
            <div className="flex">
              <Icon
                href={"www.linkedin.com/in/hadeel-ayman-45514724b"}
                icon={icon1}
              />
              <Icon
                href={"https://www.facebook.com/profile.php?id=100011182801462"}
                icon={icon2}
              />
              <Icon
                href={"https://www.instagram.com/hadeelayman2001/"}
                icon={icon3}
              />
            </div>
            <Buttons title="Let’s Connect" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
