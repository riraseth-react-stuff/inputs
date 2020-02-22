import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  };

  //name of input and key in state should be the same
  handleChange = e => {
    // if (e.target.name === "firstName") {
    //   const textValue = e.target.value;
    //   this.setState({
    //     firstName: textValue
    //   });
    // }

    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  render() {
    return (
      <section>
        <article>
          <form>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>people</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

function App() {
  return <Form></Form>;
}

export default App;
