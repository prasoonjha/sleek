export const fetchStudentsArray = (students) => ({
  type: "FETCH_STUDENTS_ARRAY",
  payload: students,
});

export const addTag = (student, tag) => ({
  type: "ADD_TAG",
  payload: { student, tag },
});
