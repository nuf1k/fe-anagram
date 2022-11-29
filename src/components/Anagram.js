import React, { useState } from "react";
import AnagramForm from "./AnagramForm";
import Results from "./Results";
import axios from "axios";

export default function Anagram() {
  const [searchResults, setSearchResults] = useState([]);

  function searchWords(rawWord) {
    /* 
    ALGORITHM LOGIC: 
    1. Takes in a word
    2. Parses all letters of word to alphabetical order
    3. Makes API call to database to find all words that match the same alphabetical order.
    */

    // original word -> alphabetical ordered word
    const parsedWord = () => {
      const rawWordArray = rawWord.split("");
      const parsedWordArray = rawWordArray.sort();
      return parsedWordArray.join("");
    };

    // make API request with new word
    axios
      .get("http://localhost:8000/api/anagrams", {
        params: {
          word: parsedWord(),
        },
      })
      .then(function (response) {
        setSearchResults(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const displayedResults = searchResults.map(
    (result) => `<td>${result["original_word"]}</td>`
  );

  console.log(displayedResults);

  return (
    <>
      <AnagramForm handleClick={searchWords} />
      <Results searchResults={searchResults} />
    </>
  );
}
