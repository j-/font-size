import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemInput extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value: props.value,
		};
		this.input = null;
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps ({ value }) {
		if (document.activeElement !== this.input) {
			this.setState({ value });
		}
	}

	handleChange (e) {
		const { value } = e.target;
		const { onChange } = this.props;
		this.setState({ value }, () => onChange(value));
	}

	render () {
		const { value } = this.state;
		return (
			<input
				type="text"
				{ ...this.props }
				value={ value }
				onChange={ this.handleChange }
				ref={ (input) => this.input = input }
			/>
		);
	}
}

ItemInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};
