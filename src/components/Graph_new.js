import React from 'react'
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Graph_new() {
    let price = useSelector(state => state.user.price);
    console.log("price", price);
    price = price? (price.map((x) => {
        return { ...x, time: new Date(x.time), name:(new Date(x.time)).getHours()+":"+(new Date(x.time)).getMinutes()+":"+(new Date(x.time)).getSeconds()  }
    })):[]
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
  return (
    <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={price}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip payload={[{ name: '05-01', value: 12, unit: 'kg' }]}/>
          <Legend />
          <Line type="monotone" strokeWidth={3} dataKey="price" stroke="#00d09c" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  )
}
