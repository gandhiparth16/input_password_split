import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  state = {
    password: ""
  };
  acceptInput = (event) => {
    const inputText = event.target.value;
    //let textLength=(inputText.textLength);
    console.log(inputText.length);
    this.setState({ password: inputText });
    /*  const textLength=
      inputText.length < 5 ? <h1>text too small</h1> : <h1>text long enough</h1>;
*/
  };

  render() {
    let output = null;
    let entry = this.state.password.split("");
    if (this.state.password.length < 5) {
      output = <h3>text too small</h3>;
    } else {
      output = <h3>text long enough</h3>;
    }
    let blockdisplay = entry.map((letter) => {
      return <ul id="Block">{letter}</ul>;
    });
    return (
      <div className="App">
        <input type="text" onChange={this.acceptInput} />
        <h2>Input: {this.state.password}</h2>
        {output}
        {console.log(this.state.password.split(""))}
        {blockdisplay}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
