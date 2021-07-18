import AllTodosIcon from "assets/icons/AllTodosIcon";
import CalendarIcon from "assets/icons/CalendarIcon";
import CreateBLankIcon from "assets/icons/CreateBlankIcon";
import DayIcon from "assets/icons/DayIcon";
import ProjectsTodoIcon from "assets/icons/ProjectsTodoIcon";
import React from "react";
import SpanMd from "./components/SpanMd";
import Icon from "./Icon";

const sizeMedium = "h-12 w-12 text-gray-300 self-center";
const applicationMenuIconStyle = "flex gap-2";

export default function App() {
  return (
    <div className="min-h-screen min-w-full bg-blue-800 text-gray-300 text-lg font-bold grid grid-rows-5 grid-cols-5 ">
      <div className="bg-blue-500 text-left uppercase text-3xl flex col-span-5 p-4 align-middle">
        <Icon className={`h-16 w-16 self-center mx-4`} />
        <h1 className="self-center">TODO List</h1>
      </div>
      <div className="bg-gray-500 row-span-4 flex flex-col items-center lg:items-start md:p-4 gap-5 py-5">
        <div className={`${applicationMenuIconStyle}`}>
          <DayIcon className={`${sizeMedium}`} />
          <SpanMd nameToShow="Day" />
        </div>
        <div className={`${applicationMenuIconStyle}`}>
          <CalendarIcon className={`${sizeMedium}`} />
          <SpanMd nameToShow="Calendar" />
        </div>
        <hr className="w-3/4 border-2 border-gray-700 mx-auto" />
        <div className={`${applicationMenuIconStyle}`}>
          <CreateBLankIcon className={`${sizeMedium}`} />
          <SpanMd nameToShow="Create Project" />
        </div>
        <div className={`${applicationMenuIconStyle}`}>
          <ProjectsTodoIcon className={`${sizeMedium}`} />
          <SpanMd nameToShow="Projects" />
        </div>
        <div className={`${applicationMenuIconStyle}`}>
          <AllTodosIcon className={sizeMedium} />
          <SpanMd className="tracking-widest" nameToShow="ALL" />
        </div>
      </div>
      <div className="row-span-4 col-span-4">Main</div>
    </div>
  );
}
