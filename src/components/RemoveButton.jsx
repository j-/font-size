import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({ onClick, index, ...props }) => (
	<button
		type="button"
		onClick={ onClick }
		{ ...props }
	>
		&times;
	</button>
);

RemoveButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
