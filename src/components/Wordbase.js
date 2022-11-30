import React, { useState } from "react";
import fetchTxtFile from "../api/fetchTxtFile";

export default function LinkForm() {
  const [wordbaseLink, setWordbaseLink] = useState("");
  const [uploadResults, setUploadResults] = useState("");

  async function handleClick(wordbaseLink) {
    setUploadResults("Uploading file");
    const results = await fetchTxtFile(wordbaseLink);
    setUploadResults("File uploaded!");
  }

  return (
    <>
      <input
        placeholder="File URL"
        className="text-center border-2 border-gray-500"
        onChange={(e) => setWordbaseLink(e.target.value)}
      />
      <button
        className="p-2 bg-slate-50 border-2 border-gray-500 my-2 font-bold hover:bg-gray-200"
        onClick={() => handleClick(wordbaseLink)}
      >
        Search words
      </button>
      <div className="text-center">{uploadResults}</div>
    </>
  );
}
