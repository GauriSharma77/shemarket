import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  { year: "2022", sellers: 25 },
  { year: "2023", sellers: 60 },
  { year: "2024", sellers: 110 },
  { year: "2025", sellers: 180 }
];

function GrowthChart() {
  return (
    <div className="chart-section">
   <h2>Women Entrepreneurs Growth (2022-2025)</h2>

      <LineChart width={900} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="sellers"
          stroke="#8e44ad"
          strokeWidth={5}
        />
      </LineChart>
    </div>
  );
}

export default GrowthChart;