import React from "react";
import "./search.css";

export default function Search({ onSubmit, onChange, onBlur, search }) {
  return (
    <form
      className="search-wrapp"
      action=""
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <input
        onChange={(e) => {
          onChange(e);
        }}
        onBlur={() => {
          onBlur(search);
        }}
        type="text"
        placeholder="Search"
      />
    </form>
  );
}
