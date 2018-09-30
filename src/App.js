import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import PageEditor from './components/editor/PageEditor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={PageEditor}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
