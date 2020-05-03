import React, { Component } from "react";
import { Searchbox } from "./components/search-box/search-box.jsx";
import "./App.css";
import Button from "react-bootstrap/Button";
import "./padding.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { MyForm } from "./MyForm";
import { Carlist } from "./Carlist";
import { Carlist2 } from "./Carlist2";
import { MyModal2 } from "./MyModal2";

//import { link } from "react-router";
class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <h3 className=" text-center p-3 mb-2 bg-gradient-primary text-white">
              CarEager - The Car Rental Agency
            </h3>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Carlist" component={Carlist} />
              <Route path="/Carlist2" component={Carlist2} />
              <Route path="/MyModal2" component={MyModal2} />
              <Route path="/MyForm" component={MyForm} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
