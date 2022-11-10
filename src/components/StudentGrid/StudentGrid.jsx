import React from "react";
import { STUDENTS } from "../../helpers/constants";
import StudentItem from "../StudentCard/StudentItem";
import "./StudentGrid.css";

const StudentGrid = () => {
  return (
    <>
      <div className="student-gallery">
        <h1>Students</h1>
        <div className="student-grid">
          {STUDENTS.map((student) => {
            return (
              <StudentItem
                key={student.id}
                student={student}
                itemType="image"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StudentGrid;
