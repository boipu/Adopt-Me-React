import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>

      <Router>
        <Search path="/" />
        <Details path="/details/:id " />
      </Router>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
