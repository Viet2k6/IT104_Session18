import TaskItem from './TaskItem';
import type { Task } from './taskReducer';

function TaskList({
  tasks,
  onDeleteRequest,
}: {
  tasks: Task[];
  onDeleteRequest: (id: number) => void;
}) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDeleteRequest={onDeleteRequest} />
      ))}
    </ul>
  );
}

export default TaskList;
