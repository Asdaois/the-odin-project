import StyleInjector from "helper/StyleInjector";
import React, { useEffect } from "react";

interface OptionMenu {
  name: string;
  nameClassName?: string;
  icon: JSX.Element;
}

export default function MenuOption({ name, nameClassName, icon }: OptionMenu) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="flex gap-2">
      <StyleInjector
        child={icon}
        addedClass="h-12 w-12 text-gray-300 self-center"
      />
      <span className={`hidden lg:block self-center ${nameClassName}`}>
        {name}
      </span>
    </div>
  );
}
