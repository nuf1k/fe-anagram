import React from "react";
import Card from "./Card";

export default function LinkForm() {
  return (
    <>
      <input placeholder="File URL" />
      <button className="p-2 bg-slate-50 border-2 border-orange-200">
        Search words
      </button>
    </>
  );
}
