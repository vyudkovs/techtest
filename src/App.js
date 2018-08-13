import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { result: {} };
  }
  render() {
  fetch(
    'https://thewirecutter.com/wp-json/wp/v2/posts',
      {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              "access-control - allow - headers": 'http://localhost:3000'
          },
          redirect: "follow",
          referrer: "no-referrer"
      }  ).then(res => res.json()).catch(error => console.error('Error==>', error))
      .then(function (myJson) {
          debugger;
          console.log('myJson=' + myJson);
          //this.setState({ result: JSON.parse(myJson || '') });
  });

    return (
      <div className="App">
        {JSON.stringify(this.state.result)}
      </div>
    );
  }
}

export default App;
