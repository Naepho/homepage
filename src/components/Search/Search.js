import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

function Search() {
  return (
    <div>
      <form id="qwant" action="https://qwant.com/" method="get">
        <input
          id="bar"
          type="text"
          name="q"
          placeholder="Search with Qwant"
          autoComplete="off"
          autoFocus
        />
        <button id="button">
          <IconButton>
            <SearchIcon id="icon" />
          </IconButton>
        </button>
      </form>
    </div>
  );
}

export default Search;
