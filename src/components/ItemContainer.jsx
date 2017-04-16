import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './Item';

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

const ItemContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Item);

ItemContainer.propTypes = {
	index: PropTypes.number.isRequired,
};

export default ItemContainer;
