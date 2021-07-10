import React from "react";
import { curriculum } from "data";
export default function Curriculum() {
  return (
    <div className="">
      <div className="container px-5 py-10 mx-auto text-center">
        <h2 className="text-4xl font-medium mb-4">{curriculum.title}</h2>
        <p className="mx-auto text-base">{curriculum.description}</p>
      </div>
      <div className="flex">
        {curriculum.paths.map((path) => {
          return (
            <div className="mx-2 border border-gray-800 p-6 rounded-lg">
              <h2 className="text-4xl font-medium mb-4">{path.title}</h2>
              <p className="mx-auto text-base text-justify">
                {path.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
