import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemInput from './ItemInput';

import {
	getItemByIndex,
	formatItem,
} from '../reducers';

import {
	setItemByIndex,
} from '../reducers/actions';

const mapStateToProps = (state, { index }) => ({
	value: formatItem(
		getItemByIndex(state, index)
	),
});

const mapDispatchToProps = (dispatch, { index }) => ({
	onChange: (value) => (
		dispatch(
			setItemByIndex(value, index)
		)
	),
});

const mergeProps = (stateProps, dispatchProps, { index, ...ownProps }) => ({
	// Omit `index` prop. It exists only for this container.
	...ownProps,
	...stateProps,
	...dispatchProps,
});

const ItemContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(ItemInput);

ItemContainer.propTypes = {
	index: PropTypes.number.isRequired,
};

export default ItemContainer;
