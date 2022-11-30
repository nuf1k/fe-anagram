import React from "react";

export default function Results(props) {
  const originalResults = props.searchResults.map(
    (result) => result["original_word"]
  );

  // Filters out non-unique results
  const uniqueResults = [...new Set(originalResults)];

  return (
    <div className="flex flex-col items-center top-10">
      <table className="bg-rose-200">
        <thead>
          <tr>
            <th>Found anagrams:</th>
          </tr>
        </thead>
        <tbody>
          {uniqueResults.map((result) => (
            <tr className="border-b-2 border-black">
              <td className="text-center">{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
