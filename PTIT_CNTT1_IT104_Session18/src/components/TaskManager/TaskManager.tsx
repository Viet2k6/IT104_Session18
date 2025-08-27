import { useReducer, useEffect, useState } from 'react';
import { taskReducer } from './taskReducer';
import type { Task } from './taskReducer';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import ConfirmModal from './ConfirmModal';
import './TaskManager.css';

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      try {
        const parsed: Task[] = JSON.parse(stored);
        dispatch({ type: 'INIT_TASKS', payload: parsed });
      } catch (error) {
        console.error('Lỗi khi parse dữ liệu từ localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const handleDeleteRequest = (id: number) => {
    setPendingDeleteId(id);
  };

  const confirmDelete = () => {
    if (pendingDeleteId !== null) {
      dispatch({ type: 'DELETE_TASK', payload: pendingDeleteId });
      setPendingDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setPendingDeleteId(null);
  };

  return (
    <div className="task-manager">
      <TaskInput dispatch={dispatch} />
      <TaskList tasks={tasks} onDeleteRequest={handleDeleteRequest} />
      {pendingDeleteId !== null && (
        <ConfirmModal
          message="Bạn có chắc muốn xóa công việc này?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default TaskManager;
