import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import StudentItem from "../../components/StudentCard/StudentItem";
import Charts from "../Charts/Charts";
import { STUDENTS } from "../../helpers/constants";

import "./StudentDetail.css";

const StudentDetail = () => {
  const { studentId } = useParams();

  const [funInputValue, setFunInputValue] = useState(true);
  const [difficultyInputValue, setDifficultyInputValue] = useState(true);

  const student = STUDENTS.find((student) => {
    return student.id === studentId;
  });

  console.log(student);

  return (
    <>
      <Navbar />
      <Link className="back-to-students" to="/students">
        Back to Students
      </Link>
      <StudentItem student={student} itemType="details" />
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={funInputValue}
            onChange={() => {
              setFunInputValue(!funInputValue);
            }}
          />
          How much fun was this exercise?
        </label>
        <label>
          <input
            type="checkbox"
            checked={difficultyInputValue}
            onChange={() => {
              setDifficultyInputValue(!difficultyInputValue);
            }}
          />
          How difficult was this exercise?
        </label>
      </div>
      <div className="student-bar-chart">
        <Charts
          config={{
            studentNames: [student.name],
            showFunBar: funInputValue,
            showDifficultyBar: difficultyInputValue,
          }}
        />
      </div>
    </>
  );
};

export default StudentDetail;
