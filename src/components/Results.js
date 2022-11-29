import React from "react";

export default function Results(props) {
  const displayedResults = props.searchResults.map((result) => (
    <tr>
      <td>{result["original_word"]}</td>
    </tr>
  ));

  return (
    <div>
      <table className="bg-rose-200">
        <thead>
          <tr>
            <th>Found anagrams</th>
          </tr>
        </thead>
        <tbody>{displayedResults}</tbody>
      </table>
    </div>
  );
}
