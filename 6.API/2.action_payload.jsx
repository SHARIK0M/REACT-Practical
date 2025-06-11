import React, { useReducer, useState } from 'react';

// Initial state
const initialState = {
  values: [],
  show: false
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, values: [...state.values, action.payload] };
    case 'SHOW':
      return { ...state, show: true };
    default:
      return state;
  }
}

function App() {
  const [input, setInput] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const addValue = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addValue}>Add</button>

      {state.values.length > 0 && (
        <button onClick={() => dispatch({ type: 'SHOW' })}>
          Show All
        </button>
      )}

      {state.show && (
        <ul>
          {state.values.map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
