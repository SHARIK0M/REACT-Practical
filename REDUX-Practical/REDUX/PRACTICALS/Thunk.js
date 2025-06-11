const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

// 🔸 Initial State
const initialState = {
  loading: false,
  data: [],
  error: ''
};

// 🔸 Action Types
const REQUEST = 'FETCH_DATA_REQUEST';
const SUCCESS = 'FETCH_DATA_SUCCESS';
const FAILURE = 'FETCH_DATA_FAILURE';

// 🔸 Action Creators
const fetchRequest = () => ({ type: REQUEST });
const fetchSuccess = (data) => ({ type: SUCCESS, payload: data });
const fetchFailure = (error) => ({ type: FAILURE, payload: error });

const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(fetchSuccess(data)); // send data to reducer
    } catch (error) {
      dispatch(fetchFailure("Failed to fetch data")); // error to reducer
    }
  };
};


// 🔸 Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case SUCCESS:
      return { loading: false, data: action.payload, error: '' };
    case FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

// 🔸 Create Store with Middleware
const store = createStore(reducer, applyMiddleware(thunk));

// 🔸 Subscribe to store updates
store.subscribe(() => {
  console.log('📦 Updated State:', store.getState());
});

// 🔸 Trigger the async action
store.dispatch(fetchData());
