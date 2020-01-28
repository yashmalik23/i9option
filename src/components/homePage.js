import React from 'react';
import * as d3 from 'd3';
import '../assets/css/home.css';
import data from './sample.json';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			chart: 'line_chart'
		};
	}

	componentDidMount() {
		this.drawLineChart();
		this.drawBarChart();
	}

	drawLineChart = () => {
		var parseDate = d3.timeParse('%Y-%m-%d');

		var yScale = d3
			.scaleLinear()
			.domain([
				400,
				d3.max(data, function(d) {
					return d.CLOSE;
				}) + 10
			])
			.range([ 400, 0 ]);
		var xScale = d3
			.scaleTime()
			.domain(
				d3.extent(data, function(d) {
					return parseDate(d.TIMESTAMP);
				})
			)
			.range([ 0, 650 ]);
		var xAxis = d3.axisBottom(xScale).ticks(4);
		var yAxis = d3.axisLeft(yScale).ticks(4);

		var line = d3
			.line()
			.x(function(d) {
				return xScale(parseDate(d.TIMESTAMP));
			})
			.y(function(d) {
				return yScale(d.CLOSE);
			});

		var chartGroup = d3
			.select('#chart')
			.attr('width', 720)
			.attr('height', 450)
			.attr('transform', 'translate(0,10)');
		chartGroup
			.append('g')
			.attr('width', 650)
			.attr('height', 400)
			.attr('transform', 'translate(50,0)')
			.append('path')
			.attr('d', line(data))
			.attr('stroke', 'blue')
			.attr('fill', 'none');
		chartGroup.append('g').attr('class', 'axis x').call(xAxis).attr('transform', 'translate(50,400)');
		chartGroup.append('g').attr('class', 'axis y').call(yAxis).attr('transform', 'translate(50,0)');
	};

	drawBarChart = () => {
	};

	render() {
		return (
			<React.Fragment>
				<div className="home_page">
					<div className="charts">
						<svg id="chart" />
						<svg id="bar-chart" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default HomePage;
