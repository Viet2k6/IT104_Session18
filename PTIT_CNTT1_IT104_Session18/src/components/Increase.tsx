import { useReducer } from 'react';
type Action = { type: 'INCREASE' };
const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    default:
      return state;
  }
};

function Increase() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>
        Increase
      </button>
    </div>
  );
}

export default Increase;
