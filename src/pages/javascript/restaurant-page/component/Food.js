import React from "react";

export default function Food({ food, index }) {
  return (
    <div>
      <div
        className="flex border-2 rounded-lg border-gray-400 bg-gray-200 text-gray-700 w-1/2 self-center"
        key={food.name.toLowerCase()}
      >
        <div
          className={`flex flex-col flex-none w-1/2 ${
            index % 2 === 0 ? "order-1" : null
          }`}
        >
          <h3 className="text-2xl h-1/4 text-center self-center pt-3 text-blue-500">
            {food.name}
          </h3>
          <p className="h-full p-3">{food.description}</p>
        </div>
        <div className="flex-none w-1/2 object-contain rounded-lg">
          <img src={food.image} alt="" />
        </div>
      </div>
    </div>
  );
}
