import React from "react";
import { useParams } from "react-router-dom";
function Course() {
  const { course } = useParams();
  return <div>{course}</div>;
}

export default Course;
