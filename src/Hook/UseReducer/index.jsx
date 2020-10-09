import React, { useReducer } from "react";

function MyUseReducer() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };
      case "decrement":
        return {
          count: state.count - 1,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      useReducer:
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -1
      </button>
      Count: {state.count}
    </div>
  );
}

export default MyUseReducer;
