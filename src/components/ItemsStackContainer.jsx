import { connect } from 'react-redux';
import ItemsStack from './ItemsStack';

import {
	getStackLength,
} from '../store';

const mapStateToProps = (state) => ({
	count: getStackLength(state),
});

export default connect(
	mapStateToProps
)(ItemsStack);
