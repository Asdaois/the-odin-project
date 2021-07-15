import React, { useEffect, useState } from "react";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Menu from "./component/Menu";
import NavBar from "./component/NavBar";

const tabs = {
  home: Home,
  menu: Menu,
  contact: Contact,
};

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [element, setElement] = useState(tabs.home);

  useEffect(() => {
    setElement(tabs[currentTab]);
  }, [currentTab]);

  return (
    <div className="w-screen p-6 bg-gray-800">
      <NavBar handleClick={setCurrentTab} tabs={tabs} currentTab={currentTab} />
      {element}
    </div>
  );
}
