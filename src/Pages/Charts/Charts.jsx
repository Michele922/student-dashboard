import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import data from "../../assets/csvjson.json";

const calculateAverage = (array) => {
  let total = 0;
  let count = 0;

  array.forEach(function (item, index) {
    total += item;
    count++;
  });

  return total / count;
};

const Charts = ({ config }) => {
  const sampleConfig = {
    studentNames: ["Aranka", "Evelyn"],
    showFunBar: true,
    showDifficultyBar: true,
  };

  const filterStudent = (student) => {
    return data.filter((i) => {
      return i.naam === student;
    });
  };

  const showChartsForStudents = () => {
    return config.studentNames.map((studentName, index) => {
      return (
        <div key={index}>
          <div style={{ maxWidth: "100%", overflowX: "scroll" }}>
            <BarChart
              width={5000}
              height={400}
              data={filterStudent(studentName)}
            >
              <CartesianGrid stroke="#ccc" />
              {config.showDifficultyBar ? (
                <Bar type="monotone" dataKey="moeilijkheid" fill="#234522" />
              ) : null}
              {config.showFunBar ? (
                <Bar type="monotone" dataKey="plezier" fill="#8884d8" />
              ) : null}
              <XAxis dataKey="opdracht" width={200} />
              <YAxis />
              <Tooltip />
            </BarChart>
          </div>
        </div>
      );
    });
  };

  const showChartWithAvarages = () => {
    const allAssignments = config.studentNames.flatMap((studentName) => {
      return data.filter((d) => {
        return d.naam === studentName;
      });
    });

    return (
      <BarChart width={5000} height={400} data={allAssignments}>
        <CartesianGrid stroke="#ccc" />
        {config.showDifficultyBar ? (
          <Bar type="monotone" dataKey="moeilijkheid" fill="#234522" />
        ) : null}
        {config.showFunBar ? (
          <Bar type="monotone" dataKey="plezier" fill="#8884d8" />
        ) : null}
        <XAxis dataKey="opdracht" width={200} />
        <YAxis />
        <Tooltip />
      </BarChart>
    );
  };

  return <div style={{ maxWidth: "100%" }}>{showChartsForStudents()}</div>;
};

export default Charts;
