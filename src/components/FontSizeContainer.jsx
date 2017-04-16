import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontSize from './FontSize';

import {
	getFinalFontSize,
} from '../reducers';

const mapStateToProps = (state) => ({
	px: getFinalFontSize(state),
});

export default connect(
	mapStateToProps
)(FontSize);
