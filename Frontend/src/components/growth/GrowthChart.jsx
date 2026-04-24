import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const GrowthChart = ({ data, type }) => {
  const label = type === 'height' ? 'Height (cm)' : 'Weight (kg)';
  const color = type === 'height' ? '#3b82f6' : '#10b981';

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="ageInMonths" 
            label={{ value: 'Age (Months)', position: 'insideBottomRight', offset: -5 }} 
          />
          <YAxis label={{ value: label, angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={type}
            name={label}
            stroke={color}
            strokeWidth={3}
            dot={{ r: 6, fill: color }}
            activeDot={{ r: 8, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
