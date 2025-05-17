import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onDelete: (task: Task) => void;
  toggleTask: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete, toggleTask }) => {
  return (
    <li className="flex items-center justify-between p-2 max-w-lg">
      {/* Checkbox for completing tasks */}
      <label className="flex items-center mr-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}  // Toggle task completion
          className="mr-2"
        />
        {task.name}
      </label>

      {/* Trash can icon for delete button */}
      <button
        onClick={() => onDelete(task)}
        className="text-gray-500 hover:text-red-500"
        aria-label="Delete Task"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};

export default TodoItem;
