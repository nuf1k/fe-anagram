import React from "react";
import Card from "./Card";

export default function Anagram() {
  return (
    <div>
      <input placeholder="Anagram" />
      <button className="p-2 bg-slate-50 border-2 border-orange-200">
        Search words
      </button>
    </div>
  );
}
