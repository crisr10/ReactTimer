import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';
import createReactClass from 'create-react-class';

var Timer = createReactClass({
	getInitialState: function () {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		// using countdownStatus because it is already required in the existing controllers, if I want to use something like timerStatus, I would have  to create another component with the right PropTypes
		if(this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount: function () {
		clearInterval(this.timer);
	},
	startTimer: function () {
		this.timer = setInterval(() => {
 			this.setState({
				count: this.state.count + 1
			});
		}, 1000);
	},
	handleSetTimer: function(seconds) {
		this.setState({
			count: seconds,
			timerStatus: 'started'
		});
	},
	handleStatusChange: function(newStatus) {
		this.setState({timerStatus: newStatus});
	},
	render: function() {
		var {count, timerStatus} = this.state;

		return (
			<div>
				<h1 className='page-title'>Timer</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		)
	}
})

module.exports = Timer;

