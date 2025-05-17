import React, { useState } from 'react';
import Modal from './Modal';
import AddTaskForm from './AddTaskForm'; // Ensure AddTaskForm is implemented
import TodoItem from './TodoItem'; // Import TodoItem component
import { nanoid } from 'nanoid';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Track tasks in state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Track modal visibility

  // Function to add a new task
  const addTask = (taskName: string): void => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: nanoid(), name: taskName, completed: false },
    ]);
    setIsModalOpen(false); // Close modal after adding task
  };

  // Function to delete a task
  const deleteTask = (taskToDelete: Task): void => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };

  // Function to toggle task completion
  const toggleTask = (id: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="m-4">
      {/* Add Task Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      >
        Add Task
      </button>

      {/* Modal for adding tasks */}
      <Modal
        isOpen={isModalOpen}
        onCloseRequested={() => setIsModalOpen(false)}
        headerLabel="Add New Task"
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>

      {/* Task List */}
      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul className="list-none pl-0">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}  // Use task.id as key
              task={task}
              onDelete={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
