import React, { useState, useEffect } from "react";
import TodoListItem from "../components/TodoListItem";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : ["get coffee", "read book"];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const AddTask = () => {
    let updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask("");
  };
  const RemoveTask = (task) => {
    let updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
  };
  return (
    <div className="m-8 flex justify-center ">
      <div className="flex flex-row gap-10">
        <div className="px-8 bg-amber-100 rounded-2xl p-4">
          <ul>
            {tasks.map((task, i) => {
              return <TodoListItem task={task} key={i} delTask={RemoveTask} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="p-3 rounded-xl text-white placeholder-gray-300 bg-gray-700"
            type="text"
            onChange={(v) => {
              setNewTask(v.target.value);
              console.log(newTask);
            }}
            value={newTask}
          />
          <button
            onClick={AddTask}
            className={`px-5 py-2 rounded-xl text-xl text-white ${
              newTask ? " bg-emerald-500 active:bg-emerald-700" : "bg-gray-500"
            }`}
            disabled={!newTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
