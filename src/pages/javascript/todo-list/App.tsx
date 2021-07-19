import AllTodosIcon from "assets/icons/AllTodosIcon";
import CalendarIcon from "assets/icons/CalendarIcon";
import CreateBLankIcon from "assets/icons/CreateBlankIcon";
import DayIcon from "assets/icons/DayIcon";
import ProjectsTodoIcon from "assets/icons/ProjectsTodoIcon";
import React from "react";
import MenuOption from "./components/MenuOption";
import Icon from "./Icon";

const sizeMedium = "h-12 w-12 text-gray-300 self-center";

export default function App() {
  return (
    <div className="min-h-screen min-w-full bg-blue-800 text-gray-300 text-lg font-bold grid grid-rows-5 grid-cols-5 ">
      <div className="bg-blue-500 text-left uppercase text-3xl flex col-span-5 p-4 align-middle">
        <Icon className={`h-16 w-16 self-center mx-4`} />
        <h1 className="self-center">TODO List</h1>
      </div>
      <div className="bg-gray-500 row-span-4 flex flex-col items-center lg:items-start md:p-4 gap-5 py-5">
        <MenuOption name="Day" icon={<DayIcon />} />
        <MenuOption name="Calendar" icon={<CalendarIcon />} />
        <hr className="w-3/4 border-2 border-gray-700 mx-auto" />
        <MenuOption name="Create Project" icon={<CreateBLankIcon />} />
        <MenuOption name="Projects" icon={<ProjectsTodoIcon />} />
        <MenuOption
          name="ALL"
          nameClassName="tracking-widest"
          icon={<AllTodosIcon />}
        />
      </div>
      <div className="row-span-4 col-span-4">Main</div>
    </div>
  );
}
