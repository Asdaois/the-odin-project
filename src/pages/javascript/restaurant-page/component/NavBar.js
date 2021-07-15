import React from "react";
const tabs = ["home", "menu", "contact"];
export default function NavBar({ handleClick }) {
  return (
    <nav>
      {tabs.map((tab, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              handleClick(tab);
            }}
            className="capitalize hover:cursor-pointer"
          >
            {tab}
          </div>
        );
      })}
    </nav>
  );
}
