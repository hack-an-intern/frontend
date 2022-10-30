import React from 'react'
import { LineGraph } from '@groww-tech/react-charts'
export default function GGraph() {
  return (
    <LineGraph
        width={500}
        height={300}
        paddingHorz={50}
        paddingVert={50}
        
        linePaths={[{
            series:[
                [1,5],
                [2,3],
                [3,7],
                [4,4],
                [5,6]
            ],
            color: "green",
            strokeWidth: 2,
            key: "line-graph",
            showLastPointBlinking: true,
            strokeOpacity: 1,
            isSeriesToScale: true,
            allowToolTip: true,
        }]}
    />
  )
}
