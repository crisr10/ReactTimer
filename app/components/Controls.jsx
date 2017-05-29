import React from 'react';

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string,
		onStatusChange: React.PropTypes.func.isRequired,
		timerStatus: React.PropTypes.string
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
		var {countdownStatus, timerStatus} = this.props;
		var renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
			} else if (countdownStatus === 'paused') {
				return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>
			} else if (timerStatus === 'started') {
				return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
			} else if (timerStatus === 'paused') {
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