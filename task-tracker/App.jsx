import React from "react";
import TaskList from "./components/TaskList";

function APP() {
  const [taskData, setTaskData] = React.useState([]);

  const loadTasks = async () => {
    // Simulate API call
    const res = await fetch("/mock-api"); // Intentionally fake endpoint
    const data = await res.json();
    setTaskData(data);
  }

  React.useEffect(() => {
    // Simulate local mock data
    setTaskData([
      { id: 1, name: "Fix login issue", done: false },
      { id: 2, name: "Refactor API layer", done: false }
    ]);
  }, []);

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskList tasks={taskData} />
    </div>
  );
}

export default APP;