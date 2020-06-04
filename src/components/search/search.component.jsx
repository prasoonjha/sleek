import React, { useState } from "react";

import "./search.styles.css";

const Search = (props) => {
  const [searchField, setSearchField] = useState({
    name: "",
    tag: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSearchField((prev) => ({ ...prev, [name]: value }));
    if (name === "name") {
      props.handleNameSearch(value);
    } else {
      props.handleTagSearch(value);
    }
  };

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="search"
        placeholder="Search by name"
        name="name"
        value={searchField.name}
        onChange={onChangeHandler}
      />
      <input
        className="search-bar"
        type="search"
        placeholder="Search by tags"
        name="tag"
        value={searchField.tag}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
