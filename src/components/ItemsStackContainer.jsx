import { connect } from 'react-redux';
import ItemsStack from './ItemsStack';

import {
	getStackLength,
} from '../reducers';

const mapStateToProps = (state) => ({
	count: getStackLength(state),
});

export default connect(
	mapStateToProps
)(ItemsStack);
