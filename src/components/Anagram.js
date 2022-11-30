import React, { useState } from "react";
import AnagramForm from "./AnagramForm";
import Results from "./Results";
import fetchAnagrams from "../api/fetchAnagrams";

export default function Anagram() {
  const [searchResults, setSearchResults] = useState([]);

  async function searchWords(rawWord) {
    /* 
    ALGORITHM LOGIC: 
    1. Takes in a word
    2. Parses all letters of word to alphabetical order
    3. Makes API call to database to find all words that match the same alphabetical order.
    */

    // original word -> alphabetical ordered word
    const parsedWord = rawWord.split("").sort().join("");

    // make API request with new word
    const results = await fetchAnagrams(parsedWord);
    setSearchResults(results);
  }

  return (
    <>
      <AnagramForm handleClick={searchWords} />
      <Results searchResults={searchResults} />
    </>
  );
}
