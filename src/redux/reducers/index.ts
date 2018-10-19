const immutable = require('immutable');
const initialState = immutable.fromJS({
  pages: [],
});

export default function index(state = initialState, action: any) {
  switch (action.type) {
    case 'LOAD_PAGE_SUCCESSED':
      return state.set('pages', action.payload);
    default:
      return state;
  }
}
