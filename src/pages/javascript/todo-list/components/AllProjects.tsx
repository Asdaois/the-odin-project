import React from "react";
import TodoItem from "../models/TodoItem";
import TodoProject from "../models/TodoProject";
import Todo from "./Todo";

interface AllProjectsProps {
  projects: TodoProject[];
  updateProject: (project: TodoProject, index: number) => void;
}

export default function AllProjects({
  projects,
  updateProject,
}: AllProjectsProps) {
  return (
    <div className="p-4 flex flex-col gap-4">
      {projects.map((project, id) => {
        const handleUpdate = (todo: TodoItem, index: number) => {
          const modifiedProject = { ...project };
          modifiedProject.todos[index] = todo;
          updateProject(modifiedProject, id);
        };

        return (
          <div className="bg-blue-700 p-4 rounded-lg" key={id}>
            <div className="mb-4">{project.name}</div>
            <div className="flex flex-col gap-4">
              {project.todos.map((todo, idTodo) => {
                return (
                  <Todo
                    index={idTodo}
                    todo={todo}
                    key={idTodo}
                    setTodo={handleUpdate}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
