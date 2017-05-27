import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

var Timer = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			countdownStatus: 'paused'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		// using countdownStatus because it is already required in the existing controllers, if I want to use something like timerStatus, I would have  to create another component with the right PropTypes
		if(this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined;
					break;
				case 'stopped':
					this.setState({count: 0, countdownStatus: 'paused'});
			}
		}
	},
	componentWillUnmount: function () {
		console.log('componentdidUnmount');
		clearInterval(this.timer);
		this.timer = undefined;
	},
	startTimer: function () {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
		}, 1000);
	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownStatus: newStatus
		});
	},
	handleStatusChange: function (newStatus) {
		this.setState({
			countdownStatus: newStatus
		});
	},
	render: function() {
		var {count, countdownStatus} = this.state;

		return (
			<div>
				<h1 className='page-title'>Timer</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		)
	}
})

module.exports = Timer;