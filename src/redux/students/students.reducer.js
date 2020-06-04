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

    default:
      return state;
  }
};

export default studentsReducer;
