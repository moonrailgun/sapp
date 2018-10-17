import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
const store = configureStore();

import Editor from './routes/Editor'
import Page from './routes/Page'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/editor" component={Editor}></Route>
            <Route path="/page" component={Page}></Route>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
