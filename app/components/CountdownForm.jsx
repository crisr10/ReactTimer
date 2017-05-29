import React from 'react';
import createReactClass from 'create-react-class';

var CountdownForm = createReactClass({
	onSubmit: function (e) {
		e.preventDefault();
		var strSeconds = this.refs.seconds.value;

		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value = '';

			// Here we define the function onSetCountdown, this function is called inside Countdown.jsx
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	},

	render: function() {
		return (
			<div>
				<form ref='form' onSubmit={this.onSubmit} className='countdown-form'>
					<input type='text' ref='seconds' placeholder='Enter time in seconds'/>
					<button className='button expanded'>Start</button>
				</form>
			</div>
		)
	}
});

module.exports = CountdownForm;