import React from 'react'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from 'react';
// Highcharts.setOptions({
// 	colors: ['#36096D'],
// 	plotOptions: {
// 		area: {
// 			fillColor: {
// 				linearGradient: {
// 					x1: 0,
// 					x2: 0,
// 					y1: 0,
// 					y2: 1
// 				},
// 				stops: [
// 					[0, '#36096D'],
// 					[1, '#37D5D6']
// 				]
// 			}
// 		}
// 	}

// });
export const Graph = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData([
			[1589016541000, 9710.39],
			[1589020140000, 9646.27],
			[1589023741000, 9621.71],
			[1589027341000, 9661.06],
			[1589030940000, 9654.65],

		])
	}, []);
	const options = {
		title: {
			text: 'My stock chart'
		},
		series: [
			{
				startpoint: 1589016541000,
				data: data
				,
				colors: ['#36056E'],
				includeInDataExport: true,

			}
		]
	};

	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				constructorType={'stockChart'}
				options={options}
			/>
		</div>
	)
}
