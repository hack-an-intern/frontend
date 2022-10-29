import React from 'react'

import { useState, useEffect } from 'react';
import API from '../api';
import axios from 'axios';
import { Subgraph } from './Subgraph';



const getconfig = (data) => {
	console.log("data ", data);

	return (
		{
			title: {
				text: 'My stock chart'
			},
			chart: {
				backgroundColor: '#ddddff',
			},
			series: [
				{
					startpoint: 1589016541000,
					data: data,
					colors: ['#36056E'],
					includeInDataExport: true,

				}
			]
		}
	)
};

export const Graph = () => {

	const [options, setOptions] = useState(getconfig([]));



	useEffect(() => {
		API.get('/price/')
			.then(res => {
				console.log("res ", res.data);
				console.log(getconfig([]))
				console.log(options);
			})
	})



	return (
		<div>
			<Subgraph options={options} />
		</div>
	)
}
