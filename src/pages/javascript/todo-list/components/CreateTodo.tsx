import React, { useEffect, useState } from "react";
import TodoItem, { Priority } from "../models/TodoItem";

const DefaultTodo: TodoItem = {
  name: "",
  dueDate: Date.now(),
  id: null,
  priority: Priority.LOW,
  finalized: false,
};

interface CreateTodoProps {
  handleNewTodo: (newTodo: TodoItem) => void;
}

function CreateTodo({ handleNewTodo: handleTodos }: CreateTodoProps) {
  const [todo, setTodo] = useState<TodoItem>(DefaultTodo);
  const [priorityOptions, setPriorityOptions] = useState<string[] | null>();

  useEffect(() => {
    const enumsKeys = Object.keys(Priority)
      .map((key, i) => Priority[i])
      .filter((value) => typeof value === "string") as string[];
    console.log({ enumsKeys });
    setPriorityOptions(enumsKeys);
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setTodo((prevState: TodoItem) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <label htmlFor="name" className="text-white px-2 w-1/3 inline-block">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleInput}
          value={todo?.name}
          placeholder="New Todo"
          className="form-input rounded w-2/3"
        />
      </div>
      <div>
        <label
          htmlFor="priority"
          className="px-2 inline-block w-1/3 text-white"
        >
          Priority
        </label>
        <select
          name=""
          id=""
          className="form-select rounded"
          onChange={(e) => {
            const { value } = e.currentTarget;
            setTodo((prevTodo) => ({
              ...prevTodo,
              priority: Priority[value as keyof typeof Priority],
            }));
          }}
        >
          {priorityOptions?.map((option, index) => {
            return (
              <option key={index} id={index.toString()}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="dueDate" className="px-2 inline-block w-1/3 text-white">
          Due Date
        </label>
        <input type="date" name="dueDate" id="" />
      </div>
      <button
        onClick={() => {
          if (todo.name.length < 5) {
            alert("The name of the todo need more thant 5 letters");
            return;
          }
          setTodo(DefaultTodo);
          handleTodos(todo);
        }}
        className="font-bold py-2 px-4 rounded-lg bg-blue-400 text-white hover:bg-blue-500 mx-auto w-1/3"
      >
        Add
      </button>
    </div>
  );
}

export default CreateTodo;
