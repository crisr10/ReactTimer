import React from 'react';
import Nav from 'Nav';
import PropTypes from 'prop-types';

var Main = (props) => {
	return (
		<div>
		<Nav/>
			<div>
				<div>
				<p>Main.jsx Rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	)
};

Nav.PropTypes = {
	text: PropTypes.string.isRequried
};

module.exports = Main;