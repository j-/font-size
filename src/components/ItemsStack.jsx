import React from 'react';
import PropTypes from 'prop-types';
import ItemRootContainer from './ItemRootContainer';
import ItemContainer from './ItemContainer';

const getStackElements = (count) => {
	const elements = [];
	for (let i = 0; i <= count; i++) {
		elements.push(
			<li key={ i } value={ i + 1 }>
				<ItemContainer index={ i } />
			</li>
		);
	}
	return elements;
};

const ItemsStack = ({ count }) => (
	<ol className="font-size-items">
		<li value={ 0 }>
			<ItemRootContainer />
		</li>
		{ getStackElements(count) }
	</ol>
);

ItemsStack.propTypes = {
	count: PropTypes.number.isRequired,
};

export default ItemsStack;
