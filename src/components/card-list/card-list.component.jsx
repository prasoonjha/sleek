import React, { useState } from "react";

import Search from "../search/search.component";
import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ students }) => {
  const [nameSearchString, setNameSearchString] = useState("");
  const [tagSearchString, setTagSearchString] = useState("");

  const handleNameSearch = (searchString) => {
    setNameSearchString(searchString);
  };

  const handleTagSearch = (searchString) => {
    setTagSearchString(searchString);
  };

  const filteredStudentsByName = students.filter((student) =>
    (student.firstName + " " + student.lastName)
      .toLowerCase()
      .includes(nameSearchString.toLowerCase())
  );
  const filteredStudentsByTags =
    students.tags &&
    students.filter((student) =>
      student.tags.includes(tagSearchString.toLowerCase())
    );

  return (
    <React.Fragment>
      <Search
        handleNameSearch={handleNameSearch}
        handleTagSearch={handleTagSearch}
      />
      <div className="card-list">
        {filteredStudentsByName.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardList;
