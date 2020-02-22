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

  handleSubmit = e => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName} ${lastName} `;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: ""
      });
    }
  };
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
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
