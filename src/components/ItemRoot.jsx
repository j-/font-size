import React from 'react';
import PropTypes from 'prop-types';
import ItemInput from './ItemInput';

const ItemRoot = ({ value, onChange, ...props }) => (
	<div className="font-size-item font-size-item--root">
		<ItemInput
			value={ value }
			onChange={ onChange }
			{ ...props }
		/>
	</div>
);

ItemRoot.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ItemRoot;
