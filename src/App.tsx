import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import Editor from './routes/Editor'
import Page from './routes/Page'

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route path="/editor" component={Editor}></Route>
              <Route path="/page" component={Page}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
