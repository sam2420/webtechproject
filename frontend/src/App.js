import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Store } from "./Store";
function App() {
  // console.log("hello")
  const {state} = useContext(Store);
  const{cart}=state;
  return (
    // 
    <BrowserRouter>
      {/* console.log("hello"), */}
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand href="#home">Ecommerce Website</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length>0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
                </Nav>
            </Container>

          </Navbar>
          {/* <Link to="/">website</Link> */}
        </header>
        <main>
          {/* list of products
           */}
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>

        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
// console.log("hello");

export default App;
