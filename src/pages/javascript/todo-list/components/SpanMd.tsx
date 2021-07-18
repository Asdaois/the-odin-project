import React from "react";

interface Title {
  nameToShow: string;
  className?: string;
}

function SpanMd({ nameToShow = "None", className = "" }: Title) {
  return (
    <span className={`hidden lg:block self-center ${className}`}>
      {nameToShow}
    </span>
  );
}

export default SpanMd;
