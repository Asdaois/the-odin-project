import { curriculum } from "data";
import { changeNameToUrl } from "helper/urlHelper";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative min-h-screen md:flex ">
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="h-8 w-8 bg-gray-500 focus:outline-none focus:bg-gray-600 fixed right-0 rounded-bl-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`bg-blue-400 text-gray-800 w-64 py-7 inset-y-0 left-0 transform ${
          show ? "-translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out absolute`}
      >
        <a href="a" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-2xl font-extrabold ml-2">The Odin Project</span>
        </a>
        <nav className="mt-6 p-2">{generateLinks()}</nav>
      </div>
    </div>
  );

  function generateLinks() {
    return curriculum.paths.map((path) => {
      const pathUrl = `/course/${changeNameToUrl(path.title)}`;
      return (
        <div className="">
          <Link
            to={pathUrl}
            className="block px-4 py-2 rounded hover:bg-blue-500 transition-all duration-200"
          >
            {path.title}
          </Link>
          {path.projects.map((project) => {
            const projectUrl = `${pathUrl}/${changeNameToUrl(project.title)}`;
            return (
              <Link
                to={projectUrl}
                className="block ml-1 px-4 py-2 rounded hover:bg-blue-300 transition-all duration-200"
              >
                {project.title}
              </Link>
            );
          })}
        </div>
      );
    });
  }
}

export default NavBar;
