// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

// const LinearChart = props => {
//   const {quarterCommitCount} = props
//   const data = quarterCommitCount
//   return (
//     <LineChart
//       width={400}
//       height={400}
//       data={data}
//       margin={{top: 5, right: 20, left: 10, bottom: 5}}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" height={80} />
//       <YAxis />
//       <Tooltip />
//       <Line
//         // type="monotone"
//         dataKey="commits"
//         stroke="#88884d8"
//         activeDot={{r: 8}}
//       />
//       {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
//     </LineChart>
//   )
// }

// export default LinearChart
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const LinearChart = props => {
  const {quarterCommitCount} = props
  //   console.log(quarterCommitCount)
  const data = quarterCommitCount
  const options = {
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Grid line color
        },
        ticks: {
          color: '#ffffff', // X-axis label color
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Grid line color
        },
        ticks: {
          color: '#ffffff', // Y-axis label color
        },
      },
    },
  }
  return (
    <LineChart
      data={data}
      width={1200}
      height={300}
      margin={{
        top: 5,
        right: 100,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type=""
        dataKey="commits"
        // label="Commits per repo"
        stroke="rgba(59, 130, 246, 1)"
        strokeWidth={2}
        dot={{fill: '#3B82F6', r: 3}}
        activeDot={{r: 8}}
        options={options}
      />
    </LineChart>
  )
}

export default LinearChart
