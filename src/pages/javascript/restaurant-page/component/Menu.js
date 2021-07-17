import React from "react";
import { restaurantData } from "../data";

export default function Menu() {
  return (
    <div>
      <h1 className="text-4xl text-red-500 mb-4">Menu</h1>
      <div className="flex flex-col gap-2 justify-center">
        {restaurantData.menu.map((food, i) => {
          return (
            <div
              className="flex border-2 rounded-lg border-gray-400 bg-gray-200 text-gray-700 w-1/2 self-center"
              key={food.name.toLowerCase()}
            >
              <div
                className={`flex flex-col flex-none w-1/2 ${
                  i % 2 === 0 ? "order-1" : null
                }`}
              >
                <h3 className="text-2xl h-1/4 text-center self-center pt-3 text-blue-500">
                  {food.name}
                </h3>
                <p className="h-full p-3">{food.description}</p>
              </div>
              <div className="flex-none w-1/2 object-contain rounded-lg">
                <img
                  src={food.image}
                  alt=""
                  onScrollCapture={(e) => {
                    console.log(e);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
