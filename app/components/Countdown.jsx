import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm'

var Countdown = React.createClass ({
	getInitialState : function() {
		return {count: 0};
	},

	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds
		})
	},

	render: function () {
		var {count} = this.state;

		return (
			<div>
				<Clock totalSeconds={count}/>
				{/* Here we use the method onSetCountdown, that we defined previously on CountdownForm.jsx line 12 inside of onSubmit function */}
				<CountdownForm onSetCountdown={this.handleSetCountdown}/>
			</div>
		)
	}
});

module.exports = Countdown;