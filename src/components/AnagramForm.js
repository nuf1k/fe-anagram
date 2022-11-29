import React, { useState } from "react";

export default function Anagram(props) {
  const [anagram, setAnagram] = useState("");

  return (
    <>
      <input
        className="text-center border-2 border-gray-500"
        placeholder="Anagram"
        onChange={(e) => setAnagram(e.target.value)}
      />
      <button
        onClick={() => props.handleClick(anagram)}
        className="p-2 bg-slate-50 border-2 border-gray-500 my-2 font-bold hover:bg-gray-200"
      >
        Search words
      </button>
    </>
  );
}
