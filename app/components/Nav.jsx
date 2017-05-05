import React from 'react'
var {Link, IndexLink} = require('react-router');
var createReactClass = require('create-react-class');

var Nav = createReactClass ({

	render: function () {
		return (
		<div className='top-bar'>
			<div className='top-bar-left'>
				<ul className='menu'>
					<li className='menu-text text'>React Timer App</li>
					<li>
						<IndexLink to='/' activeClassName='active-link'>Timer</IndexLink>
					</li>
					<li>
						<Link to='/countdown' activeClassName='active-link'>Countdown</Link>
					</li>
				</ul>
			</div>
			<div className='top-bar-right'>
				<ul className='menu'>
					<li className='menu-text'>Created By <a href="http://cristiandrodriguez.com/" target='_blank'>Cristian Rodriguez</a>
					</li>
				</ul>
			</div>
		</div>
		);
	}
});

module.exports = Nav;