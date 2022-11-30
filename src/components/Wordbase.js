import React from "react";

export default function LinkForm() {
  return (
    <>
      <input
        placeholder="File URL"
        className="text-center border-2 border-gray-500"
      />
      <button className="p-2 bg-slate-50 border-2 border-gray-500 my-2 font-bold hover:bg-gray-200">
        Search words
      </button>
    </>
  );
}
