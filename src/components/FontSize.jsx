import React from 'react';
import PropTypes from 'prop-types';

const FontSize = ({ px }) => (
	<div className="font-size">
		<strong className="font-size-label">Final font size</strong><br />
		<output className="font-size-value">{ `${px}px` }</output>
	</div>
);

FontSize.propTypes = {
	px: PropTypes.number.isRequired,
};

export default FontSize;
