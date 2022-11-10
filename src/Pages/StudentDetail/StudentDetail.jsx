import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import StudentItem from "../../components/StudentCard/StudentItem";
import StudentDetailCard from "../../components/StudentContainer/StudentDetailCard";
import { STUDENTS } from "../../helpers/constants";

import "./StudentDetail.css";

const StudentDetail = () => {
  const { studentId } = useParams();

  const student = STUDENTS.find((student) => {
    return student.id === studentId;
  });

  return (
    <>
      <Navbar />
      <Link className="back-to-students" to="/students">
        Back to Students
      </Link>
      <StudentItem student={student} itemType="details" />
      <div className="checkbox-container">
        <label>
          <input type="checkbox" />
          How much fun was this exercise?
        </label>
        <label>
          <input type="checkbox" />
          How difficult was this exercise?
        </label>
      </div>
      <div className="bar-chart"></div>
    </>
  );
};

export default StudentDetail;
