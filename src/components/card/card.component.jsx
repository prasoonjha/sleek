import React, { useState, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import "./card.styles.css";

const Card = (props) => {
  const [showGrades, setShowGrades] = useState(false);
  const [tagTextField, setTagTextField] = useState("");

  const student = useRef(props.student);

  const clickHandler = () => {
    setShowGrades(!showGrades);
  };

  const onChangeHandler = (event) => {
    setTagTextField(event.target.value);
  };

  const addTagHandler = (event) => {
    if (event.key === "Enter") {
      if (tagTextField) {
        if (!student.current.tags) {
          student.current.tags = [];
          student.current.tags.push(tagTextField);
        } else {
          student.current.tags.push(tagTextField);
        }
      }
      setTagTextField("");
      console.log(student);
    }
  };

  return (
    <div className="card-container">
      <div className="content-visible">
        <div className="image-container">
          <img src={props.student.pic} alt="student" />
        </div>
        <div className="text-container">
          <h1>
            {props.student.firstName.toUpperCase()}{" "}
            {props.student.lastName.toUpperCase()}
          </h1>
          <h4>Email: {props.student.email}</h4>
          <h4>Company: {props.student.company}</h4>
          <h4>Skill: {props.student.skill}</h4>
          <h4>
            Average:{" "}
            {props.student.grades.reduce(
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
          {props.student.grades.map((grade, index) => (
            <h3 key={index}>
              Test {`${index + 1}`}: {grade}
            </h3>
          ))}

          <div className="add-tags">
            <div className="tags-container">
              {student.current.tags &&
                student.current.tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
            </div>

            <input
              className="tag-text"
              type="text"
              placeholder="Add a tag"
              value={tagTextField}
              onChange={onChangeHandler}
              onKeyDown={addTagHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
