import React from "react";
import Student from "./Student";

const Grid = ({ students, onEdit, onDelete }) => {
  return (
    <>
      <div className="wrapper">
        {students.map((student) => (
          <div className="box">
            <Student
              key={student.id}
              student={student}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Grid;
