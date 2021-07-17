import React, { useLayoutEffect as useEffect, useRef, useState } from "react";

export default function Food({ food, index }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const topPosition = ref.current.getBoundingClientRect().top;
    const botPosition = ref.current.getBoundingClientRect().bottom;

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const isNotScrolledPast = window.scrollY < botPosition + 100;
      if (topPosition < scrollPosition && isNotScrolledPast) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
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
        <img
          src={food.image}
          alt=""
          className={`transform transition-all ease-in-out duration-500 opacity-0  ${
            show
              ? "opacity-100 translate-x-0"
              : index % 2
              ? "translate-x-1/3"
              : "-translate-x-1/3"
          }`}
        />
      </div>
    </div>
  );
}
