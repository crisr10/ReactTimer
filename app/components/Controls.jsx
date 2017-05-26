import React from 'react';

var Controls = React.createClass({
	propTypes: {
		timerStatus: React.PropTypes.string.isRequired,
		countdownStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},
	onStatusChange: function (newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	componentWillReceiveProps: function (newProps) {
		console.log('componentWillReceiveProps', newProps.countdownStatus);
	},
	render: function () {
		var {timerStatus, countdownStatus} = this.props;
		var renderStartStopButton = () => {
			if (countdownStatus === 'started' || timerStatus === 'started') {
				return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
			} else if (countdownStatus === 'paused' || timerStatus === 'paused') {
				return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>
			}
		}

		return (
			<div className='controls'>
				{renderStartStopButton()}
				<button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
			</div>
		)
	}
});

module.exports = Controls;

// Calling functions that generate new functions. There is no need to create a function for each one of the buttons. onStatusChange returns a "custom" function passing the new status