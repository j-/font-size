import { connect } from 'react-redux';
import ItemInput from './ItemInput';

import {
	getRootItem,
	formatItem,
} from '../store';

import {
	setRootItem,
} from '../store/actions';

const mapStateToProps = (state) => ({
	value: formatItem(
		getRootItem(state)
	),
});

const mapDispatchToProps = {
	onChange: setRootItem,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemInput);
