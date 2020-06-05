import React, { useState } from "react";
import { connect } from "react-redux";
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
  const filteredStudentsByTag = students.filter(
    (student) =>
      student.tags &&
      student.tags
        .reduce((accumulator, currentTag) => accumulator + currentTag, "")
        .includes(tagSearchString.toLowerCase())
  );

  return (
    <React.Fragment>
      <Search
        handleNameSearch={handleNameSearch}
        handleTagSearch={handleTagSearch}
      />
      <div className="card-list">
        {tagSearchString
          ? filteredStudentsByTag.map((student) => (
              <Card key={student.id} student={student} />
            ))
          : filteredStudentsByName.map((student) => (
              <Card key={student.id} student={student} />
            ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  students: state.students.students,
});

export default connect(mapStateToProps)(CardList);
