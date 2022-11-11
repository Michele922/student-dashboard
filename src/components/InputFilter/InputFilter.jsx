import { useState } from "react";
import "./InputFilter.css";
import { getStudentData, getStudentNames } from "../../helpers/dataHelpers";
import Chart from "../Chart/Chart";

const InputFilter = () => {
  const [funInputValue, setFunInputValue] = useState(true);
  const [difficultyInputValue, setDifficultyInputValue] = useState(true);

  const [students, setStudents] = useState(
    getStudentNames().map((item) => {
      return {
        name: item,
        state: true,
      };
    })
  );

  /**
   * It takes a name and a new state, and then it returns a new array of students, where the student with
   * the given name has its state changed to the given new state.
   */
  const handleStudentsChange = (name, newState) => {
    setStudents((prevState) => {
      return prevState.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            state: newState,
          };
        }
        return item;
      });
    });
  };

  /**
   * Return an array of student data objects, where the student data object's name matches the name of a
   * student object in the students array, and the student object's state is true.
   * @returns An array of objects.
   */
  const filteredStudentsData = () => {
    const filteredStudentsData = getStudentData().filter((studentDataItem) => {
      const student = students.find((studentItem) => {
        return studentItem.name === studentDataItem.name;
      });
      return student !== undefined && student.state === true;
    });
    return filteredStudentsData;
  };

  /**
   * "It takes an assignment and a key, and returns the average of the values of that key for all
   * students who have that assignment."
   * @returns The average of the assignment scores for the given assignment.
   */
  const calculateAverageForKey = (assignment, key) => {
    let average = 0;
    let items = 0;

    filteredStudentsData().forEach((item) => {
      if (item.assignment === assignment) {
        average += item[key];
        items++;
      }
    });
    return average / items;
  };

  /**
   * It takes the filteredStudentsData() array and creates a new array with the average of the difficult
   * and fun properties for each assignment.
   * @returns An array of objects.
   */
  const averageStudentData = () => {
    const averageStudentData = [];
    let filterItemId = 1;

    filteredStudentsData().forEach((studentItem) => {
      const data = averageStudentData.find((filterItem) => {
        return studentItem.assignment === filterItem.assignment;
      });

      if (data === undefined) {
        const averageDifficult = calculateAverageForKey(
          studentItem.assignment,
          "difficult"
        );
        const averageFun = calculateAverageForKey(
          studentItem.assignment,
          "fun"
        );
        averageStudentData.push({
          id: filterItemId++,
          name: "average",
          assignment: studentItem.assignment,
          difficult: averageDifficult,
          fun: averageFun,
        });
      }
    });
    return averageStudentData;
  };

  return (
    <>
      <div className="main">
        <div className="filters">
          <h2>Filter on:</h2>
          <div>
            <h4>Students:</h4>
            <div className="student-list">
              {students.map((student) => {
                return (
                  <div key={`key_${student.name}`}>
                    <label htmlFor={`${student.name}_checkbox`}>
                      {student.name}
                    </label>
                    <input
                      name={`${student.name}_checkbox`}
                      type="checkbox"
                      checked={student.state}
                      onChange={() => {
                        handleStudentsChange(student.name, !student.state);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <h4>Type:</h4>
          <div className="bar-settings">
            <div>
              <input
                name="funInput"
                type="checkbox"
                checked={funInputValue}
                onChange={() => {
                  setFunInputValue(!funInputValue);
                }}
              />
              <label htmlFor="funInput">How much fun was this exercise?</label>
            </div>
            <div>
              <input
                name="difficultyInput"
                type="checkbox"
                checked={difficultyInputValue}
                onChange={() => {
                  setDifficultyInputValue(!difficultyInputValue);
                }}
              />
              <label htmlFor="difficultyInput">
                How difficult was this exercise?
              </label>
            </div>
          </div>
        </div>
        <div className="home-bar-chart">
          <Chart
            config={{
              data: averageStudentData(),
              showFunBar: funInputValue,
              showDifficultyBar: difficultyInputValue,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InputFilter;
