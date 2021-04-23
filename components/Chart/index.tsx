import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { NationFetch } from "../../types/NationFetch";

const AxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export const Chart = ({ data: info }: { data: NationFetch }) => {
  return (
    <div style={{ width: "100%", height: 450 }}>
      <ResponsiveContainer>
        <LineChart
          height={300}
          data={info.data.reverse()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" height={100} tick={AxisTick} />
          <YAxis />
          <Tooltip formatter={(value) => [value, "New cases"]} />
          <Legend formatter={() => <span>New cases</span>} />
          <Line
            type="monotone"
            dataKey="newCases"
            stroke="#8884d8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
