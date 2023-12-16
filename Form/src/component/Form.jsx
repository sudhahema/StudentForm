import React, { useState } from "react";

const Form = ({ onSubmit, editedStudent }) => {
  const [name, setName] = useState(editedStudent ? editedStudent.name : "");
  const [email, setEmail] = useState(editedStudent ? editedStudent.email : "");
  const [age, setAge] = useState(editedStudent ? editedStudent.age : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, age });
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <>
    <h3>Enter Details</h3>
    <form onSubmit={handleSubmit} className="form-container">
     Name:
      <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-container"
      /> 
      Email ID:
      <input
        type="email"
        placeholder="Enter the email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-container"
      />
      Age : 
      <input
        type="number"
        placeholder="Enter the age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="input-container"
      />
      <button type="submit" className="button-style">
        {editedStudent ? "Save Changes" : "Add Student"}
      </button>
    </form>
    </>
  );
};

export default Form;
