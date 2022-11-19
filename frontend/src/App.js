import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import { Link } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
function App() {
  // console.log("hello")
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
