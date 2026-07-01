import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

function FinanceChart() {
  const data = [
    {
      month: "Investment",
      amount: 500000,
    },
    {
      month: "Revenue",
      amount: 1200000,
    },
    {
      month: "Expenses",
      amount: 700000,
    },
    {
      month: "Profit",
      amount: 500000,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-3xl font-bold">
            📊 Financial Overview
          </h2>

          <p className="text-gray-500 mt-2">
            Estimated financial projection
          </p>

        </div>

      </div>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default FinanceChart;