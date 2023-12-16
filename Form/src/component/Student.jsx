import React from "react";

const Student = ({ student, onEdit, onDelete }) => {
  return (
    <div className="student-card">
      <div>Name: {student.name}</div>
      <div>Email: {student.email}</div>
      <div>Age: {student.age}</div>
      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student)}>Delete</button>
    </div>
  );
};

export default Student;
