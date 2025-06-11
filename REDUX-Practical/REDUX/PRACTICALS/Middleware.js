const redux = require('redux');
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

// Action Type
const BUY_CAKE = 'BUY_CAKE';

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE
  };
}

// Initial State
const initialState = {
  count: 10
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

// ✅ Simple Logger Middleware
const logger = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action); // pass action to reducer
  console.log('Next State:', store.getState());
  return result;
};

// Create store with middleware
const store = createStore(reducer, applyMiddleware(logger));

console.log("Initial state:", store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
