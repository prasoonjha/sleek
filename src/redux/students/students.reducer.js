import { addTagToStudent } from "./students.utils";
const INITIAL_STATE = {
  students: [],
};
const studentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_STUDENTS_ARRAY":
      return {
        ...state,
        students: action.payload,
      };
    case "ADD_TAG":
      return {
        ...state,
        students: addTagToStudent(
          state.students,
          action.payload.student,
          action.payload.tag
        ),
      };
    default:
      return state;
  }
};

export default studentsReducer;
