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
    <div>
      {tasks.length === 0 ? (
        <p className="empty-message">Không có công việc nào.</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteRequest={onDeleteRequest}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
