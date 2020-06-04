import React, { useState } from "react";
import { connect } from "react-redux";

import { FaPlus, FaMinus } from "react-icons/fa";

import "./card.styles.css";

import { addTag } from "../../redux/students/students.actions";

const Card = ({ student, addTag }) => {
  const [showGrades, setShowGrades] = useState(false);
  const [tagTextField, setTagTextField] = useState("");

  const clickHandler = () => {
    setShowGrades(!showGrades);
  };

  const onChangeHandler = (event) => {
    setTagTextField(event.target.value);
  };

  const addTagHandler = (event) => {
    if (event.key === "Enter") {
      if (tagTextField) {
        addTag(student, tagTextField);
      }
      setTagTextField("");
    }
  };

  return (
    <div className="card-container">
      <div className="content-visible">
        <div className="image-container">
          <img src={student.pic} alt="student" />
        </div>
        <div className="text-container">
          <h1>
            {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
          </h1>
          <h4>Email: {student.email}</h4>
          <h4>Company: {student.company}</h4>
          <h4>Skill: {student.skill}</h4>
          <h4>
            Average:{" "}
            {student.grades.reduce(
              (accumulator, currentElem) => accumulator + Number(currentElem),
              0
            ) / 8}{" "}
            %
          </h4>
        </div>
        <div className="icon-container" onClick={clickHandler}>
          {showGrades ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {showGrades && (
        <div className="content-hidden">
          {student.grades.map((grade, index) => (
            <h3 key={index}>
              Test {`${index + 1}`}: {grade}
            </h3>
          ))}

          {/* <div className="add-tags">
            <div className="tags-container">
              {student.current.tags &&
                student.current.tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
            </div> */}

          <input
            className="tag-text"
            type="text"
            placeholder="Add a tag"
            value={tagTextField}
            onChange={onChangeHandler}
            onKeyDown={addTagHandler}
          />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTag: (student, tag) => dispatch(addTag(student, tag)),
});

export default connect(null, mapDispatchToProps)(Card);
