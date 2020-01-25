import React from 'react';
import * as d3 from 'd3';
import '../assets/css/home.css';

const data = [
	{
		TIMESTAMP: '2010-07-13',
		OPEN: 410.4,
		HIGH: 416,
		LOW: 407.48,
		CLOSE: 414.51,
		TURNOVER: 129.04,
		VOLATILITY: 23.48
	},
	{
		TIMESTAMP: '2010-07-14',
		OPEN: 416,
		HIGH: 422.18,
		LOW: 414.65,
		CLOSE: 417.26,
		TURNOVER: 221.98,
		VOLATILITY: 25.48
	},
	{
		TIMESTAMP: '2010-07-15',
		OPEN: 418,
		HIGH: 418,
		LOW: 411,
		CLOSE: 412.52,
		TURNOVER: 66.96,
		VOLATILITY: 24.26
	},
	{
		TIMESTAMP: '2010-07-16',
		OPEN: 412.8,
		HIGH: 413.2,
		LOW: 406.24,
		CLOSE: 407.79,
		TURNOVER: 96.27,
		VOLATILITY: 28.77
	},
	{
		TIMESTAMP: '2010-07-19',
		OPEN: 408.4,
		HIGH: 412.8,
		LOW: 404.4,
		CLOSE: 409.57,
		TURNOVER: 179.71,
		VOLATILITY: 34.76
	},
	{
		TIMESTAMP: '2010-07-20',
		OPEN: 409.57,
		HIGH: 417.74,
		LOW: 407.2,
		CLOSE: 408.88,
		TURNOVER: 137.15,
		VOLATILITY: 26.53
	},
	{
		TIMESTAMP: '2010-07-21',
		OPEN: 410.02,
		HIGH: 412.95,
		LOW: 405,
		CLOSE: 406.61,
		TURNOVER: 94.61,
		VOLATILITY: 26.79
	},
	{
		TIMESTAMP: '2010-07-22',
		OPEN: 406,
		HIGH: 412.6,
		LOW: 405,
		CLOSE: 411.45,
		TURNOVER: 114.01,
		VOLATILITY: 25.41
	},
	{
		TIMESTAMP: '2010-07-23',
		OPEN: 413.8,
		HIGH: 413.8,
		LOW: 405.18,
		CLOSE: 407.72,
		TURNOVER: 141,
		VOLATILITY: 24.1
	},
	{
		TIMESTAMP: '2010-07-26',
		OPEN: 409,
		HIGH: 411.96,
		LOW: 406.83,
		CLOSE: 410.38,
		TURNOVER: 62.08,
		VOLATILITY: 29.7
	},
	{
		TIMESTAMP: '2010-07-27',
		OPEN: 410.64,
		HIGH: 415.6,
		LOW: 409,
		CLOSE: 413.36,
		TURNOVER: 137.22,
		VOLATILITY: 27.39
	},
	{
		TIMESTAMP: '2010-07-28',
		OPEN: 414.4,
		HIGH: 418,
		LOW: 411.99,
		CLOSE: 417.22,
		TURNOVER: 136.78,
		VOLATILITY: 21.76
	},
	{
		TIMESTAMP: '2010-07-29',
		OPEN: 418.18,
		HIGH: 423,
		LOW: 416.65,
		CLOSE: 420.12,
		TURNOVER: 236.22,
		VOLATILITY: 22.49
	},
	{
		TIMESTAMP: '2010-07-30',
		OPEN: 419.54,
		HIGH: 427.4,
		LOW: 416,
		CLOSE: 425.38,
		TURNOVER: 247.55,
		VOLATILITY: 20.33
	},
	{
		TIMESTAMP: '2010-08-02',
		OPEN: 426,
		HIGH: 428.98,
		LOW: 424.27,
		CLOSE: 427.27,
		TURNOVER: 176.25,
		VOLATILITY: 19.1
	},
	{
		TIMESTAMP: '2010-08-03',
		OPEN: 428,
		HIGH: 428.8,
		LOW: 422.35,
		CLOSE: 424.49,
		TURNOVER: 172.94,
		VOLATILITY: 19.48
	},
	{
		TIMESTAMP: '2010-08-04',
		OPEN: 423,
		HIGH: 425.8,
		LOW: 418.24,
		CLOSE: 422.96,
		TURNOVER: 155.29,
		VOLATILITY: 21.01
	},
	{
		TIMESTAMP: '2010-08-05',
		OPEN: 413,
		HIGH: 425.48,
		LOW: 413,
		CLOSE: 420.05,
		TURNOVER: 154.92,
		VOLATILITY: 21.85
	}
];

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
	}

	drawLineChart = () => {
  
  }

	render() {
		return (
			<React.Fragment>
				{/* <div className="home_page">
					<div className="charts"> */}
				<svg id="chart" />
				{/* </div>
				</div> */}
			</React.Fragment>
		);
	}
}

export default HomePage;
