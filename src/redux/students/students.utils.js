export const addTagToStudent = (students, student, tag) => {
  const currentStudent = students.find((stud) => stud.id === student.id);
  if (currentStudent.tags) {
    currentStudent.tags.push(tag);
    return [...students];
  } else {
    currentStudent.tags = [];
    currentStudent.tags.push(tag);
    return [...students];
  }
};
