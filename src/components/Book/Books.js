import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleBook from "./SingleBook";
import "./Book.css"
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    
      <ul className="books-container">
        {books &&
          books.map((book, i) => (
            <li className="card" key={i}>
              <SingleBook book={book} /> {/*Pass the book as 'book' prop */}
            </li>
          ))}
      </ul>
    
  );
};

export default Books;
