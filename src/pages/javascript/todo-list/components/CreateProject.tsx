import React, { useState } from "react";
import TodoProject from "../models/TodoProject";

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

  return (
    <div>
      <input
        type="text"
        name="name"
        id=""
        onChange={handleInput}
        value={project?.name || ""}
      />
    </div>
  );
}
