import React from "react";
import "./Students.css";
import Navbar from "../../components/Navbar/Navbar";
import StudentGrid from "../../components/StudentGrid/StudentGrid";

const Students = () => {
  return (
    <div>
      <Navbar />
      <StudentGrid />
    </div>
  );
};
export default Students;
