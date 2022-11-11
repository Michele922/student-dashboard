import { StudentData } from "../assets/studentData";
import { STUDENTS } from "./constants";

export const getStudentData = () => {
  return StudentData;
};

export const getStudentNames = () => {
  const students = [];

  STUDENTS.forEach((item) => {
    if (!students.includes(item.name)) {
      students.push(item.name);
    }
  });

  return students;
};
