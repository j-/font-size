import { connect } from 'react-redux';
import ItemRoot from './ItemRoot';

import {
	getRootItem,
	formatItem,
} from '../reducers';

import {
	setRootItem,
} from '../reducers/actions';

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
)(ItemRoot);
