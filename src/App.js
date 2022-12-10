
import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetails from "./components/Book/BookDetails";
function App() {
  return (
  
  
      <main>
        <Routes>
<Route path="/" element={<Home />} exact />  
          <Route path="/" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/books/:id" element={<BookDetails />} exact />
        </Routes>
      </main>

  );
}

export default App;