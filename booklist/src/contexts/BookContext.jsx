import React, { createContext, useState } from "react";

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "name of wind", author: "takashi", id: 1 },
    { title: "name of kaito", author: "takashi", id: 2 }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: Date.now() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
