import React from 'react'

import { useState, useEffect } from 'react';
import API from '../api';
import axios from 'axios';
import { Subgraph } from './Subgraph';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const getseries = (data) => (
	[
		{
			// startpoint: 1589016541000,
			name: 'Price',
			type: 'spline',
			data: data,
			colors: ['#36056E'],
			includeInDataExport: true,

			tooltip: {
				valueDecimals: 2
			},

		}
	]
)


const getconfig = (data) => {
	console.log("data ", data);

	return (
		{
			title: {
				text: 'My stock chart'
			},
			// chart: {
			// 	backgroundColor: '#ddddff',

			// },
			series: getseries(data),

			rangeSelector: {
				buttons: [{
					type: 'hour',
					count: 1,
					text: '1h'
				}, {
					type: 'day',
					count: 1,
					text: '1d'
				}, {
					type: 'month',
					count: 1,
					text: '1m'
				}, {
					type: 'year',
					count: 1,
					text: '1y'
				}, {
					type: 'all',
					text: 'All'
				}],
				inputEnabled: false, // it supports only days
				selected: 4 // all
			},

		}
	)
};

export const Graph = () => {

	// const [options, setOptions] = useState(getconfig([]));
	const [options, setOptions] = useState(null);
	const [data, setData] = useState(null);


	useEffect(() => {
		API.get('/price/')
			.then(res => {
				console.log("res ", res.data);
				let data22 = [[1589016541000, 9710.42],
				[1589020140000, 9646.29],
				[1589023741000, 9621.71],
				[1589027341000, 9661.06],
				[1589030940000, 9654],];
				let data = []
				for (let x of res.data) {
					let date = new Date(x.time);
					data.push([date.getTime(), x.price])
				}

				setData(data);
				setOptions((prev) => {
					return {
						...prev,
						series: [
							{
								startpoint: 1589016541000,
								data: data,
								colors: ['#36056E'],
								includeInDataExport: true,

							}
						]
					};
				});
				console.log("options ", options);
			})

	}, []);



	return (
		<div>

			{options && <Subgraph options={getconfig(data)} />}
			{/* <HighchartsReact
				highcharts={Highcharts}
				constructorType={'stockChart'}
				options={options}
				oneToOne={true}
			/> */}

		</div>
	)
}
