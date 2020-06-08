import React, { createContext, useState } from "react";
export const BookContext = createContext();
export default function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "name of wind", id: 1 },
    { title: "name of kaito", id: 2 },
    { title: "name of hinako", id: 3 },
    { title: "name of hitomi", id: 4 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
