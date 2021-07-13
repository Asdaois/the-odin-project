import Trash from "icons/Trash";
import React, { useState } from "react";

function Book(title, author, review = "") {
  this.title = title;
  this.author = author;
  this.review = review;
}
function App() {
  const [books, setBooks] = useState([
    new Book(
      "Juegos del destino",
      "Jose Guevara",
      "Un buen libro para una lectura rapidaUn buen libro para una lectura rapidaUn buen libro para una lectura rapidaUn buen libro para una lectura rapidaUn buen libro para una lectura rapida"
    ),
    new Book(
      "Juegos del destino",
      "Jose Guevara",
      "Un buen libro para una lectura rapida"
    ),
    new Book(
      "Juegos del destino",
      "Jose Guevara",
      "Un buen libro para una lectura rapida"
    ),
  ]);

  return (
    <div className="bg-gray-400 min-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-2 ">
        {books.map((book, i) => {
          return (
            <div className="bg-gray-100 container mx-auto flex flex-col rounded-lg shadow-xl mt-4 py-4 px-6 text-gray-800 justify-between">
              <h3 className="font-semibold leading-tight text-lg truncate">
                {book.title}
              </h3>
              <p className="mt-2 h-12 max-h-12 overflow-hidden">
                {book.review}
              </p>
              <div className="flex justify-between">
                <h4 className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                  {book.author}
                </h4>
                <button
                  className="text-red-700"
                  onClick={() => {
                    const newBooks = [
                      ...books.slice(0, i),
                      ...books.slice(i + 1),
                    ];
                    console.log(newBooks);
                    setBooks(newBooks);
                  }}
                >
                  <Trash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
