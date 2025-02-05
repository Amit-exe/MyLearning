import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

function TodoListItem({ task, delTask }) {
  //   const [isChecked, setIsChecked] = useState(false);

  const [isChecked, setIsChecked] = useState(() => {
    return JSON.parse(localStorage.getItem(task)) || false;
  });

  useEffect(() => {
    localStorage.setItem(task, JSON.stringify(isChecked));
  }, [isChecked, task]);

  return (
    <div className="flex items-center gap-4 ju">
      <input
        type="checkbox"
        className="p-2 scale-110"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <p
        className={`text-xl text-gray-800 min-w-xl ${
          isChecked ? "text-decoration-line: line-through" : null
        }`}
      >
        {task}
      </p>

      <button
        className="p-2 rounded-full text-amber-500 hover:bg-red-100"
        onClick={() => delTask(task)}
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}

export default TodoListItem;
