import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Container,
  Col,
  Nav,
  Image,
  Row,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Nav
        className="navbar navbar-expand-lg navbar-dark navbar-full"
        style={{ backgroundColor: "#d3d3d3" }}
      >
        <Nav.Link href="/" style={{ color: "black", fontWeight: "bold" }}>
          Photo Gallery
        </Nav.Link>

        <Nav.Link
          href="/categories"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Disney Movies
        </Nav.Link>

        <Nav.Link
          href="/categories"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Family Movies
        </Nav.Link>

        <Nav.Link
          href="/categories"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Favorite Movies
        </Nav.Link>

        <Nav.Link
          href="/categories"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Children's Movies
        </Nav.Link>
      </Nav>

      <Switch>
        <Route exact path="/">
          <Gallery />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

function Gallery() {
  return (
    (document.title = "Photo Gallery"),
    (
      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/58/ee/8c/58ee8c4bac9b5948b3cd132765797968.png"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/03/Ansin_BeautyandtheBeast_REG_press.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://www.insidethemagic.net/wp-content/uploads/2017/03/Mondo-Aladdin.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr02/7/20/enhanced-2000-1394241139-5.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://artfiles.alphacoders.com/730/7300.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://i5.walmartimages.com/asr/535b20a0-c3fa-4f30-a90c-6b38e9b5b0bd_1.f38213d9740c5093333806aa43ad4dfd.jpeg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/68/02/a6/6802a6384cb0175c89487cf0adfc54f7.jpg"
                thumbnail
              />
            </a>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <a href="/details">
              <Image
                src="https://www1.pictures.livingly.com/mp/r4yMiu1q-YUl.jpg"
                thumbnail
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}

function Categories() {
  return (
    (document.title = "Album"),
    (
      <Container>
        <div>
          <h1 align="center">Album Title</h1>
        </div>

        <Row>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/58/ee/8c/58ee8c4bac9b5948b3cd132765797968.png"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/03/Ansin_BeautyandtheBeast_REG_press.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://www.insidethemagic.net/wp-content/uploads/2017/03/Mondo-Aladdin.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://img.buzzfeed.com/buzzfeed-static/static/2014-03/enhanced/webdr02/7/20/enhanced-2000-1394241139-5.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://artfiles.alphacoders.com/730/7300.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://ohmy.disney.com/wp-content/uploads/2014/10/big_hero_6_poster_malaysia.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://i5.walmartimages.com/asr/535b20a0-c3fa-4f30-a90c-6b38e9b5b0bd_1.f38213d9740c5093333806aa43ad4dfd.jpeg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://i.pinimg.com/originals/68/02/a6/6802a6384cb0175c89487cf0adfc54f7.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
                fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/details">
              <Image
                src="https://www1.pictures.livingly.com/mp/r4yMiu1q-YUl.jpg"
                thumbnail
                style={{ borderStyle: "inset", borderWidth: "5px" }}
                fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}

function Details() {
  return (
    (document.title = "Photo Details"),
    (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www1.pictures.livingly.com/mp/r4yMiu1q-YUl.jpg"
        />
        <Card.Body>
          <Card.Title>Cinderella</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>1950</ListGroupItem>
          <ListGroupItem>More Picture Details</ListGroupItem>
          <ListGroupItem>More Picture Details</ListGroupItem>
        </ListGroup>
      </Card>
    )
  );
}
