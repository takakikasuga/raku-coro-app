import React from 'react';
import {
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from 'recharts';

// 型のインポート
import { Data } from '../../features/graphs/totalCoronaSlice';
import { DethData } from '../../features/graphs/totalDethSlice';

interface Props {
  data: Array<Data> | Array<DethData>;
  xDataKey: string;
  areaDataKey: string;
  areaName: string;
}

const AreaReChart = ({ data, xDataKey, areaDataKey, areaName }: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={400}>
    <AreaChart data={data}>
      <XAxis dataKey={xDataKey} tick={{ fontSize: '.6rem' }}/>
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Legend verticalAlign="top" stroke="#fd7e00"/>
      <Area
        type="monotone"
        dataKey={areaDataKey}
        name={areaName}
        stroke="#fd7e00"
        fill="#fd7e00"
        strokeWidth={3}
      />
      <Brush dataKey={xDataKey} stroke="#fd7e00" />
    </AreaChart>
  </ResponsiveContainer>
  )
}
export default AreaReChart;