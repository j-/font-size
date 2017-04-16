import React from 'react';
import PropTypes from 'prop-types';
import ItemInput from './ItemInput';

const Item = ({ value, onChange, index, ...props }) => (
	<div className="font-size-item">
		<ItemInput
			value={ value }
			onChange={ onChange }
			{ ...props }
		/>
	</div>
);

Item.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

export default Item;
