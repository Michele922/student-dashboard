import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getStudentData } from "../../helpers/dataHelpers";
import { STUDENTS } from "../../helpers/constants";
import Chart from "../../components/Chart/Chart";
import Navbar from "../../components/Navbar/Navbar";
import StudentItem from "../../components/StudentCard/StudentItem";

import "./StudentDetail.css";

const StudentDetail = () => {
  const { studentName } = useParams();

  const [funInputValue, setFunInputValue] = useState(true);
  const [difficultyInputValue, setDifficultyInputValue] = useState(true);

  const student = STUDENTS.find((student) => {
    return student.name === studentName;
  });

  const studentData = getStudentData().filter((studentDataItem) => {
    return studentDataItem.name === student.name;
  });

  return (
    <>
      <Navbar />

      <Link className="back-to-students" to="/students">
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back to Students</p>
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
        <Chart
          config={{
            data: studentData,
            showFunBar: funInputValue,
            showDifficultyBar: difficultyInputValue,
          }}
        />
      </div>
    </>
  );
};

export default StudentDetail;
