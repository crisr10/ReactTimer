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

	describe('handleSetTimer', () => {
		it('should set state to started and timer', () => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleSetTimer(10);

			expect(timer.state.count).toBe(10);
			expect(timer.state.timerStatus).toBe('started');

			setTimeout(() => {
				expect(timer.state.count).toBe(9);
				done();
			}, 1001);
		});

		it('should pause timer on paused status', () => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('paused');

			setTimeout(() => {
				expect(timer.state.count).toBe(2);
				expect(timer.state.timerStatus).toBe('paused');
				done();
			}, 1001);
		});

		it('should reset timer on stopped status', () => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);
			timer.handleStatusChange('stopped');

			setTimeout(() => {
				expect(timer.state.count).toBe(0);
				expect(timer.state.timerStatus).toBe('stopped');
				done();
			}, 1001);
		});
	})
});