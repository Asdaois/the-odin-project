import React, { useState } from "react";
import TodoItem, { Priority } from "../models/TodoItem";

const DefaultTodo: TodoItem = {
  name: "Todo item",
  dueDate: Date.now(),
  id: null,
  note: "",
  priority: Priority.LOW,
};

function CreateTodo() {
  const [todo, setTodo] = useState<TodoItem>(DefaultTodo);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTodo((prevState: TodoItem) => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        id=""
        onChange={handleInput}
        value={todo?.name || ""}
      />
    </div>
  );
}

export default CreateTodo;
