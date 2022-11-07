import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <>
      <div className="main">
        <div className="student-list">
          <h1>Student list </h1>
          <label>
            <input type="checkbox" />
            Show All
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
      </div>
    </>
  );
};

export default Filter;
