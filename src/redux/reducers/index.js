const immutable = require('immutable');
const initialState = immutable.fromJS({
  pages: [],
});

module.exports = function cache(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PAGE_SUCCESSED':
      return state.set('pages', action.payload);
    default:
      return state;
  }
}
