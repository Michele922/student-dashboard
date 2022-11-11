import React from "react";
import Charts from "../../pages/Charts/Charts";
import react, { useState } from "react";
import "./InputFilter.css";

const InputFilter = () => {
  const [funInputValue, setFunInputValue] = useState(true);
  const [difficultyInputValue, setDifficultyInputValue] = useState(true);

  return (
    <>
      <div className="main">
        <div className="student-list">
          <h1>Student list </h1>
          <label>
            <input type="checkbox" />
            Average
          </label>
          <label>
            <input type="checkbox" />
            Aranka
          </label>
          <label>
            <input type="checkbox" />
            Evelyn
          </label>
          <label>
            <input type="checkbox" />
            Floris
          </label>
          <label>
            <input type="checkbox" />
            Hector
          </label>
          <label>
            <input type="checkbox" />
            Martina
          </label>
          <label>
            <input type="checkbox" />
            Maurits
          </label>
          <label>
            <input type="checkbox" />
            Rahima
          </label>
          <label>
            <input type="checkbox" />
            Sandra
          </label>
          <label>
            <input type="checkbox" />
            Storm
          </label>
          <label>
            <input type="checkbox" />
            Wietske
          </label>
          <h2>Filter on:</h2>
          <label>
            <input
              name="funInput"
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
              name="difficultyInput"
              type="checkbox"
              checked={difficultyInputValue}
              onChange={() => {
                setDifficultyInputValue(!difficultyInputValue);
              }}
            />
            How difficult was this exercise?
          </label>
        </div>
        <div className="home-bar-chart">
          <Charts
            config={{
              studentNames: ["Aranka", "Evelyn"],
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
