import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const logger = createLogger({
  level: 'info',
  logger: console,
  collapsed: true,
  // stateTransformer: (state) => state.toJS(),
})
const sagaMiddleware = createSagaMiddleware();
let middlewares = [
  sagaMiddleware,
];
if(process.env !== 'production') {
  middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState);
  sagaMiddleware.run(sagas)

  return store;
}

export default configureStore
