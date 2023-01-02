import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navi = () =>{
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home">
            <Nav.Link>Home</Nav.Link>
            </Link>
            {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
            <Link to="/about">
            <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      )
      };


      export default Navi;