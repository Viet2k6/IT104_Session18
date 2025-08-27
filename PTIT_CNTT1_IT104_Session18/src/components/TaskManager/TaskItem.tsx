import type { Task } from './taskReducer';

function TaskItem({
  task,
  onDeleteRequest,
}: {
  task: Task;
  onDeleteRequest: (id: number) => void;
}) {
  return (
    <li className="task-item">
      <p className="task-text">{task.name}</p>
      <button onClick={() => onDeleteRequest(task.id)} className="delete-btn">Xóa</button>
    </li>
  );
}

export default TaskItem;
