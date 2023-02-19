import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import icon1 from "../../assets/images/nav-icon1.svg";
import icon2 from "../../assets/images/nav-icon2.svg";
import icon3 from "../../assets/images/nav-icon3.svg";
import Icon from "../Icons";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      sticky="top"
      style={{ zIndex: "999999" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <h1>Portfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container">
            <a href="#main" className="text-light">
              Home
            </a>
            <a href="#skills" className="text-light">
              Skills
            </a>
            <a href="#Projects" className="text-light">
              Projects
            </a>
            <a href="#Courses" className="text-light">
              Courses
            </a>
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
          </Nav>
        </Navbar.Collapse>
        <a href="#Connect">
          <button className="connects" >
            Let’s Connect
          </button>
        </a>
      </Container>
    </Navbar>
  );
}

export default Header;
