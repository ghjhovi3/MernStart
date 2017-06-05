import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Greetings from './components/greetings'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Mongo/Mongoose + Expressjs + React + Nodejs </h1>
        <Greetings />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
