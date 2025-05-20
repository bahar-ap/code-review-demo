import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  let t = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done === false) {
      t.push(<TaskItem task={tasks[i]} key={i} />);
    }
  }

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {t}
      </ul>
    </div>
  );
}