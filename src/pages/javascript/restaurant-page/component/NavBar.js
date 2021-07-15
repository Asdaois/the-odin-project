import React from "react";
export default function NavBar({ handleClick, tabs, currentTab }) {
  return (
    <nav className="flex justify-center">
      {Object.keys(tabs).map((tab, i) => {
        console.log({ tab, currentTab });
        return (
          <div
            key={i}
            onClick={() => {
              handleClick(tab);
            }}
            className={`capitalize hover:cursor-pointer mx-3 border-2 ${
              currentTab === tab
                ? "border-red-500 ring-red-400"
                : "border-blue-500 ring-blue-400"
            } p-3 text-xl bg-gray-500 text-gray-300 ring-8  rounded-sm hover:ring-indigo-600`}
          >
            {tab}
          </div>
        );
      })}
    </nav>
  );
}
