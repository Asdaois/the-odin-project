import React, { useState } from "react";
import AllProjects from "./components/AllProjects";
import AllTodos from "./components/AllTodos";
import Calendar from "./components/Calendar";
import CreateProject from "./components/CreateProject";
import DaysTodos from "./components/DaysTodos";
import NavBar from "./components/NavBar";
import { Tabs } from "./enums/Tabs";
import Icon from "./Icon";
import TodoItem from "./models/TodoItem";
import TodoProject from "./models/TodoProject";
interface AppData {
  unassignedTodos: TodoItem[];
  projects: TodoProject[];
}

export default function App() {
  const [appData, setAppData] = useState<AppData>();
  const [tab, setTab] = useState<Tabs>(Tabs.ALL);

  function handleTabs(newTab: Tabs) {
    setTab(newTab);
  }

  return (
    <div className="min-h-screen min-w-full bg-blue-800 text-gray-300 text-lg font-bold grid grid-rows-5 grid-cols-5 ">
      <div className="bg-blue-500 text-left uppercase text-3xl flex col-span-5 p-4 align-middle">
        <Icon className={`h-16 w-16 self-center mx-4`} />
        <h1 className="self-center">TODO List</h1>
      </div>
      <NavBar handleTabs={handleTabs} />
      <div className="row-span-4 col-span-4">
        {tab === Tabs.CREATE_PROJECT && <CreateProject />}
        {tab === Tabs.ALL && <AllTodos />}
        {tab === Tabs.CALENDAR && <Calendar />}
        {tab === Tabs.DAY && <DaysTodos />}
        {tab === Tabs.PROJECTS && <AllProjects />}
      </div>
    </div>
  );
}
