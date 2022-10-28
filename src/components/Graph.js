/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
var startTime = 0, endTime = 0;
 
class Graph extends Component {
	componentDidMount() {
		endTime = new Date();
		document.getElementById("timeToRender").innerHTML = "Time to Render: " + (endTime - startTime) + "ms";
	}
	
	render() {
		var limit = 500;
		var y = 100;    
		var data = [];
		var dataSeries = { type: "line" };
		var dataPoints = [];
		// can enter data from here..
		for (var i = 0; i < limit; i += 1) {
			y += 7;
			dataPoints.push({
				x: i,
				y: y
			});
		}
		dataSeries.dataPoints = dataPoints;
		data.push(dataSeries);
		
		const spanStyle = {
            innerWidth:'50%',
			position:'absolute', 
			top: '10px',
			fontSize: '20px', 
			fontWeight: 'bold', 
			backgroundColor: '#d85757',
			padding: '0px 4px',
			color: '#ffffff'
		}
		
		const options = {
			zoomEnabled: true,
			animationEnabled: true,
			title: {
				text: "Try Zooming - Panning"
			},
			data: data  // random data
		}
		
		startTime = new Date();
				
		return (
            <div>
            <div>
                <CanvasJSChart options = {options} 
                    onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                <span id="timeToRender" style={spanStyle}></span>
            </div>
            <div>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                <label className="btn btn-outline-primary" for="btnradio1">Days</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked/>
                <label className="btn btn-outline-primary" for="btnradio2">Week</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked/>
                <label className="btn btn-outline-primary" for="btnradio3">Month</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off" checked/>
                <label className="btn btn-outline-primary" for="btnradio4">Year</label>
            </div>
        </div>
		);
	} 			
}
 
// module.exports = App;   
export default Graph;        