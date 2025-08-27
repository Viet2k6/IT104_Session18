import { useState } from 'react';
import type { Action } from './taskReducer';

function TaskInput({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (value.trim()) {
      dispatch({ type: 'ADD_TASK', payload: value });
      setValue('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}

export default TaskInput;
