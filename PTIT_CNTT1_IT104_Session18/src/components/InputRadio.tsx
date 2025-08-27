import { useReducer } from 'react';
type Action = {
  type: 'CHANGE_GENDER';
  payload: string;
};

const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case 'CHANGE_GENDER':
      return action.payload;
    default:
      return state;
  }
};

function InputRadio() {
  const [gender, dispatch] = useReducer(reducer, 'Nam'); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_GENDER', payload: e.target.value });
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={gender === 'Nam'}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={gender === 'Nữ'}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={gender === 'Khác'}
          onChange={handleChange}
        />
        Khác
      </label>
      <p>Selected gender: {gender}</p>
    </div>
  );
}

export default InputRadio;
