import React, { useState } from "react";
import NavBar from "./component/NavBar";

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <div>
      <NavBar handleClick={setCurrentTab} />
      {currentTab}
    </div>
  );
}
