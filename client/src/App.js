import React, { Component } from "react";
import { Navbar, Footer } from "./components";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
