import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  level: 'info',
  logger: console,
  collapsed: true,
  // stateTransformer: (state) => state.toJS(),
})

let middlewares = [
  thunk,
];
if(process.env !== 'production') {
  middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

function configureStore(initialState) {
  const reducers = require('../reducers');
  const store = createStoreWithMiddleware(reducers, initialState);

  return store;
}

export default configureStore
