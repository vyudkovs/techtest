import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { result: { 'empty': true } };
    this.print = this.print.bind(this);
    }
  print= (result) => {
      console.log('json=' + JSON.stringify(result));
      this.setState({ 'result': JSON.stringify(result) });
  }
  render() {
    fetch('https://thewirecutter.com/wp-json/wp/v2/posts', {
        method: 'get',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        mode: "cors"
    })
    .then(
        res => {
            return res.json();
        })
    .catch(
        error => {
            console.error('Error==>', error)
        })

    .then(this.print);

    return (
        <div className="App">
            {JSON.stringify(this.state.result)}
        </div>
    );
  }
}

export default App;
