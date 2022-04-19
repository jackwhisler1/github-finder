import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import axios from "axios";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // life cycle method
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data, loading: false });
  }

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
          <Users loading={this.state.loading} users={this.state.users} />
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
