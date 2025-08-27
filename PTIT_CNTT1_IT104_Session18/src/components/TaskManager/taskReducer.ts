export type Task = {
  id: number;
  name: string;
};

export type Action =
  | { type: 'INIT_TASKS'; payload: Task[] }
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'DELETE_TASK'; payload: number };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case 'INIT_TASKS':
      return action.payload;

    case 'ADD_TASK':
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload,
        },
      ];

    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};
