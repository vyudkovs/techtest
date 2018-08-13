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
      method: 'GET',
      mode:'no-cors',
      headers:{
        'Content-Type': 'application/json'
      }
    }
  )
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

    return (
      <div className="App">
        {JSON.stringify(this.state.result)}
      </div>
    );
  }
}

export default App;
