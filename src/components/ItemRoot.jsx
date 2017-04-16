import React from 'react';
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

export default ItemRoot;
