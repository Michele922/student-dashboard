import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Chart = ({ config }) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <div>
        <div style={{ maxWidth: "100%", overflowX: "scroll" }}>
          <BarChart width={5000} height={400} data={config.data}>
            <CartesianGrid stroke="#ccc" />
            {config.showDifficultyBar ? (
              <Bar type="monotone" dataKey="difficult" fill="#ffc658" />
            ) : null}
            {config.showFunBar ? (
              <Bar type="monotone" dataKey="fun" fill="#8884d8" />
            ) : null}
            <XAxis dataKey="assignment" width={200} />
            <YAxis />
            <Tooltip />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
