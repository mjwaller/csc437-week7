import React, { useState } from 'react';

function AddTaskForm({ onNewTask }) {
  const [taskName, setTaskName] = useState("");

  const handleButtonClicked = () => {
    if (taskName.trim() !== "") {
      onNewTask(taskName);  // Pass task name to parent (App.jsx)
      setTaskName("");      // Clear the text field after adding
    }
  };

  return (
    <div className="flex flex-col p-4">
      <input
        type="text"
        placeholder="New task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} // Update state on input change
        className="border rounded p-2 mb-2"
      />
      <button
        onClick={handleButtonClicked}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTaskForm;
