import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// ข้อมูลตัวอย่าง
const data = [
  { month: "Jan", total: 0 },
  { month: "Feb", total: 0 },
  { month: "Mar", total: 0 },
  { month: "Apr", total: 0 },
  { month: "May", total: 0 },
  { month: "Jun", total: 0 },
  { month: "Jul", total: 0 },
  { month: "Aug", total: 0 },
  { month: "Sep", total: 0 },
  { month: "Oct", total: 0 },
  { month: "Nov", total: 0 },
  { month: "Dec", total: 0 }
];

const EarningChar = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#3B82F6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EarningChar;
