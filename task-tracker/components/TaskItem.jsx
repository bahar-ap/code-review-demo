import React from "react";

export default function TaskItem({ task }) {
  return (
    <li>
      <p>{task.name}</p>
      <button onclick={() => alert("Done!")}>Mark Done</button>
    </li>
  );
}