import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/navbar";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    // const name = "Jack ";
    // const loading = false;
    // const foo = () => "Bar";
    // const showName = true;

    // if (loading) {
    //   return <h2>Loading...</h2>;
    // }

    return (
      <div className="App">
        <Navbar title="GitHub Finder" icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>

        {/* {loading ? (
          <h2>Loading . . </h2>
        ) : (
          <h1>Hello {showName && name}</h1>
          // ternary operator to show name
        )}
        <h1>Hello {foo()}</h1> */}
      </div>
    );
  }
}

export default App;
