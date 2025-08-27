import { useReducer } from 'react';
type Action = {
  type: 'CHANGE_TEXT';
  payload: string;
};

const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.payload;
    default:
      return state;
  }
};

function InputText() {
  const [text, dispatch] = useReducer(reducer, '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_TEXT', payload: e.target.value });
  };

  return (
    <div>
      {text && <h2>{text}</h2>}
      <input
        type="text"
        placeholder="Nhập văn bản"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputText;
