import React, { Component } from "react";
import "./App.css";
//uncotrolled inputs
class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.refs.myName.value;
    const email = this.email.value;
    const text = this.refs.myText;
    text.style.color = "red";
    console.log(name, email, text.textContent);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input type="email" ref={dude => (this.email = dude)} />
          <button type="submit">submit</button>
        </form>
        <p ref="myText">sup world</p>
      </section>
    );
  }
}

function App() {
  return <Form></Form>;
}

export default App;
