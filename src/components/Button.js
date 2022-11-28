import React from "react";

export default function Button(props) {
  return (
    <button className="p-4 bg-white text-black hover:bg-gray-200" {...props} />
  );
}
