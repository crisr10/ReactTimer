import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should set state to started and start timer', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('started');
			expect(timer.state.count).toBe(1);
			done();
		}, 1001);
	});

	it('should pause timer on paused status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleSetTimer(10)
		timer.handleStatusChange('paused');

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('paused');
			expect(timer.state.count).toBe(10)
			done();
		}, 1001);
	});

	it('should reset timer on stopped status', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleSetTimer(10)
		timer.handleStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('stopped');
			done();
		}, 1001);
	});
});