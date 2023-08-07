import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

const Bestsellers = () => {
  const [bestsellersList, setBestsellersList] = useState([]);

  useEffect(() => {
    const apiKey = "Wge1AsphUAfUuZ9XfB47akO8AmIcbeOa";
    const apiUrl = `https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) =>
        setBestsellersList(
          response.data.results.sort((a, b) => a.rank - b.rank)
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="page-title">
        NY Times Bestsellers / <span className="book-category">Fiction</span>
      </h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-3">
          {bestsellersList.map((book) => (
            <Book book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
