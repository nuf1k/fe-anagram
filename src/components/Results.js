import React from "react";

export default function Results(props) {
  const displayedResults = props.searchResults.map((result) => (
    <tr className="border-b-2 border-black">
      <td className="text-center">{result["original_word"]}</td>
    </tr>
  ));

  return (
    <div className="flex flex-col items-center top-10">
      <table className="bg-rose-200">
        <thead>
          <tr>
            <th>Found anagrams:</th>
          </tr>
        </thead>
        <tbody>{displayedResults}</tbody>
      </table>
    </div>
  );
}
