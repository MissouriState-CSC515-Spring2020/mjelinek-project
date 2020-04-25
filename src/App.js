import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/gallery";
import {Nav} from "react-bootstrap";

const Details = lazy(() => import('./components/details'));
const Recents = lazy(() => import('./components/recents'));

export default function App() {
  return (
    <Router>
      <Nav
        className="navbar navbar-expand-lg navbar-dark navbar-full"
        style={{ backgroundColor: "#d3d3d3" }}
      >
        <Nav.Link href="/" style={{ color: "black", fontWeight: "bold" }}>
          Last Week Tonight
        </Nav.Link>

        <Nav.Link
          href="/recents"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Recent Videos
        </Nav.Link>

		<Nav.Link
          href="/details"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Video Details
        </Nav.Link>


      </Nav>
	  
	  <Suspense fallback={<div>Loading...</div>}>
		<Switch>
			<Route exact path="/">
			<Gallery />
			</Route>
			<Route path="/recents" component={Recents}>
			<Recents />
			</Route>
			<Route path="/details" component={Details}>
			<Details />
			</Route>
		</Switch>
	  </Suspense>
    </Router>
  );
}