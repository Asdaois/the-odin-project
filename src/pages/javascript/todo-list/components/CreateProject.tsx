import React, { useState } from "react";
import TodoItem from "../models/TodoItem";
import TodoProject from "../models/TodoProject";
import CreateTodo from "./CreateTodo";
const defaultProject: TodoProject = {
  id: "",
  name: "",
  todos: [],
};

export default function CreateProject() {
  const [project, setProject] = useState<TodoProject>(defaultProject);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProject((prevState: TodoProject) => ({ ...prevState, [name]: value }));
  }

  function handleTodos(newTodo: TodoItem) {
    const todosList: TodoItem[] = [...project.todos];
    todosList.push(newTodo);
    setProject((prev) => ({ ...prev, todos: todosList }));
  }

  return (
    <div className="text-gray-700 px-4 py-4 flex flex-col gap-4  md:w-3/4 lg:w-1/2 m-auto ">
      <div className="bg-blue-700 py-4 px-4 rounded-xl">
        <h2 className="text-white text-2xl">Project</h2>
        <div className="flex flex-col gap-4">
          <div className="">
            <label
              htmlFor="name"
              className="px-2 inline-block w-1/3 text-white"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id=""
              onChange={handleInput}
              value={project?.name || ""}
              className={`form-input focus:outline-none focus:ring-1 focus:ring-green-600 rounded`}
            />
          </div>
          <button className="py-2 px-4 rounded-lg bg-blue-400 hover:bg-blue-500 text-white font-semibold mx-auto w-1/3 focus:outline-none">
            Add Project
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-blue-700 rounded-xl px-4 py-4 gap-4">
        <h3 className="text-white mx-auto text-xl tracking-wide">
          TODOs of the project
        </h3>
        <CreateTodo handleNewTodo={handleTodos} />
      </div>
    </div>
  );
}
