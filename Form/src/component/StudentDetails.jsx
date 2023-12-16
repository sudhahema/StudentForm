import React, { useState, useEffect } from "react";
import Form from "./Form";
import Grid from "./Grid";
import EditModal from "./EditModal";

function StudentDetails() {
  const [students, setStudents] = useState([]);
  const [editedStudent, setEditedStudent] = useState(null);
 
  const maxLocalStorageItems = 36;

  // Load student data from localStorage when the component mounts
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []);

  const addStudent = (student) => {
 
    if (students.length >= maxLocalStorageItems) {
        // alert("Maximum limit reached. You cannot add more students.");
        console.log("Maximum limit reached. You cannot add more students")
        return;
      }
    const newStudent = { ...student, id: Date.now() };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);

    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const editStudent = (student) => {
    setEditedStudent(student);
  };

  const saveEditedStudent = (editedInfo) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === editedStudent.id ? { ...student, ...editedInfo } : student
      )
    );
    setEditedStudent(null);
    localStorage.setItem("students", JSON.stringify(students));
  };

  const deleteStudent = (student) => {
    const updatedStudents = students.filter((s) => s.id !== student.id);
    setStudents(updatedStudents);

    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };


  
 
  const filterStudentsAboveAge = (age) => {
    return students.filter((student) => student.age > age);
  };

  const filterStudentsBelowAge = (age) => {
    return students.filter((student) => student.age < age);
  };

  return (
    <div className="App">
      <Form onSubmit={addStudent} />
      {editedStudent && (
        <EditModal onSubmit={saveEditedStudent} editedStudent={editedStudent}   />
      )}
      <h2>Students</h2>
      <Grid students={students} onEdit={editStudent} onDelete={deleteStudent}  />
    </div>
  );
}

export default StudentDetails;
