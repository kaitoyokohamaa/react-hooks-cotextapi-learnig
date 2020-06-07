import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/themeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
