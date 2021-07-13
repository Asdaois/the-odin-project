// TODO: Optional - we haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their books will disappear! If you want, you are capable of adding some persistence to this library app using the Web Storage API.
/*localStorage (docs here) allows you to save data on the user’s computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it’s pretty handy! Set up a function that saves the whole library array to localStorage every time a new book is created, and another function that looks for that array in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get tripped up:
Make sure your app doesn’t crash if the array you retrieve from localStorage isn’t there!
localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck! */
import AddDocument from "icons/AddDocument";
import BookClose from "icons/BookClose";
import BookOpen from "icons/BookOpen";
import Trash from "icons/Trash";
import React, { useState } from "react";

function Book(title = "", author = "", review = "") {
  this.title = title;
  this.author = author;
  this.review = review;
  this.wasRead = false;
}
function App() {
  const [newBook, setNewBook] = useState(new Book("", ""));
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
  function handleNewBook(e) {
    const book = { ...newBook };
    book[e.target.name] = e.target.value;
    setNewBook(book);
  }
  return (
    <div className="bg-gray-400 min-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-2 ">
        <form className="bg-gray-100 container mx-auto flex flex-col rounded-lg shadow-xl mt-4 py-4 px-6 text-gray-800 justify-between h-64">
          <div className="flex justify-between">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              title
            </label>
            <input
              className={`rounded-md ${
                newBook.title ? null : "border-2 border-red-500"
              }`}
              type="text"
              name="title"
              value={newBook.title}
              onChange={(e) => {
                handleNewBook(e);
              }}
              required
            />
          </div>
          <div className="flex justify-between">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="author"
            >
              Author
            </label>

            <input
              className={`rounded-md ${
                newBook.title ? null : "border-2 border-red-500"
              }`}
              type="text"
              name="author"
              value={newBook.author}
              onChange={(e) => {
                handleNewBook(e);
              }}
              required
            />
          </div>
          <div className="min-w-full">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="review"
            >
              Review
            </label>
            <textarea
              className={`w-full rounded-md ${
                newBook.title ? null : "border-2 border-red-500"
              }`}
              type="text"
              name="review"
              value={newBook.review}
              rows="3"
              onChange={(e) => {
                handleNewBook(e);
              }}
              required
            />
          </div>
          <div className="flex justify-between">
            <h4 className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
              Add Book
            </h4>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                for (const key in newBook) {
                  if (newBook[key] === "") {
                    return;
                  }
                }
                const newBooks = [...books, newBook];
                setNewBook(new Book());
                setBooks(newBooks);
              }}
              className="text-blue-700"
            >
              <AddDocument />
            </button>
          </div>
        </form>
        {books.map((book, i) => {
          return (
            <div className="bg-gray-100 container mx-auto flex flex-col rounded-lg shadow-xl mt-4 py-4 px-6 text-gray-800 justify-between h-64">
              <div className="flex justify-between">
                <h3 className="font-semibold leading-tight text-lg truncate">
                  {book.title}
                </h3>
                <button
                  className=""
                  onClick={() => {
                    const copyBooks = [...books];
                    copyBooks[i].wasRead = !copyBooks[i].wasRead;
                    setBooks(copyBooks);
                  }}
                >
                  <div className="flex">
                    {book.wasRead ? (
                      <span>Reading...</span>
                    ) : (
                      <span>Read...</span>
                    )}
                    {book.wasRead ? <BookOpen /> : <BookClose />}
                  </div>
                </button>
              </div>
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
