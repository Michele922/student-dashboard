import { StudentData } from "../assets/studentData";
import { STUDENTS } from "./constants";

export const getStudentData = () => {
  return StudentData;
};

/**
 * It loops through the STUDENTS array, and if the name of the student is not already in the students
 * array, it adds it.
 * @returns An array of student names.
 */
export const getStudentNames = () => {
  const students = [];

  STUDENTS.forEach((item) => {
    if (!students.includes(item.name)) {
      students.push(item.name);
    }
  });

  return students;
};
