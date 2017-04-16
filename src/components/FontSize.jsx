import React from 'react';
import PropTypes from 'prop-types';

const FontSize = ({ px }) => (
	<div className="font-size">
		{ px }px
	</div>
);

FontSize.propTypes = {
	px: PropTypes.number.isRequired,
};

export default FontSize;
