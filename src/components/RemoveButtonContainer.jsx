import { connect } from 'react-redux';
import RemoveButton from './RemoveButton';

import {
	removeItemByIndex,
} from '../store/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, { index }) => ({
	onClick: () => (
		dispatch(
			removeItemByIndex(index)
		)
	),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RemoveButton);
