import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetails from "./components/Book/BookDetails";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Books />}  />
          <Route path="/books/:id" element={<BookDetails />}  />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;