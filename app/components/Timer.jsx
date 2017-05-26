import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

var Timer = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			timer: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timer) {
				case 'started':
					this.startTimer();
					break;
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined;
					break;
				case 'clear':
					this.setState({count: 0});
			}
		}
	},
	startTimer: function () {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount <= 0 ? newCount : 0
			});

			if(newCount === 0) {
				this.setState({timerStatus: 'stopped'})
			}
		})
	},
	render: function() {
		var {count, timerStatus} = this.state;
		return (
			<div>
				<h1 className='page-title'>Timer</h1>
				<Clock totalSeconds={count}/>
				<Controls/>
			</div>
		)
	}
})

module.exports = Timer;