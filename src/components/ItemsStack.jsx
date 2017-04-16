import React from 'react';
import PropTypes from 'prop-types';
import ItemRootContainer from './ItemRootContainer';
import ItemContainer from './ItemContainer';
import RemoveButtonContainer from './RemoveButtonContainer';

const getStackElements = (count) => {
	const elements = [];
	for (let i = 0; i <= count; i++) {
		elements.push(
			<li key={ i } value={ i + 1 } className="font-size-item">
				<ItemContainer index={ i } />
				{ i < count && <RemoveButtonContainer index={ i } /> }
			</li>
		);
	}
	return elements;
};

const ItemsStack = ({ count }) => (
	<ol className="font-size-items">
		<li value={ 0 } className="font-size-item font-size-item--root">
			<ItemRootContainer />
		</li>
		{ getStackElements(count) }
	</ol>
);

ItemsStack.propTypes = {
	count: PropTypes.number.isRequired,
};

export default ItemsStack;
