import React from 'react';
import { PieChart, Pie, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';

export function PieChartComponent({ data, dataKey, color }) {
    return (
        <PieChart width={400} height={400}>
            <Pie dataKey={dataKey} data={data} fill={color}
            cx={200}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80} />
            <Tooltip />
            <Legend />
        </PieChart>
    );
}

export function LineChartComponent({ data, dataKey }) {
    return (
        <LineChart width={500} height={300} data={data.slice(-5)} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="5 2" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}

export function BarChartComponent({ data, dataKey }) {
    const lastData = data.slice(-1);

    return (
        <BarChart
            width={500}
            height={300}
            layout="vertical"
            data={lastData} 
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 120]} />
            <YAxis dataKey="time" type="category" />
            <Tooltip />
            <Bar dataKey={dataKey} fill="#8884d8" name={dataKey} />
            <Legend verticalAlign="middle" align="left" layout="vertical" />
        </BarChart>
    );
}