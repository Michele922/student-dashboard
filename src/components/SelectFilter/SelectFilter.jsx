import React from "react";

const SelectFilter = () => {
  return (
    <>
      <div className="main">
        <label for="student" className="select-student">
          Select a Student:
          <select name="Student">
            <option value="Student">Select student</option>
            <option value="Aranka">Aranka</option>
            <option value="Evelyn">Evelyn</option>
            <option value="Floris">Floris</option>
            <option value="Hector">Hector</option>
            <option value="Martina">Martina</option>
            <option value="Maurits">Maurits</option>
            <option value="Rahima">Rahima</option>
            <option value="Sandra">Sandra</option>
            <option value="Storm">Storm</option>
            <option value="Wietske">Wietske</option>
          </select>
        </label>
      </div>
      <div className="bar-chart"></div>
    </>
  );
};

export default SelectFilter;
