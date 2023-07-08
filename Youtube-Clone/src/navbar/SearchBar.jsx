import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
    setText("");
  };
  console.log(text);
  return (
    <form className="relative" onSubmit={onSubmit}>
      <input
        type={"text"}
        className="outline-none p-2 rounded-full text-sm border w-50 sm:w-80"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button>
        <MagnifyingGlassIcon className="text-gray-400 h-7 absolute top-1 right-2 bg-white" />
      </button>
    </form>
  );
};

export default SearchBar;
