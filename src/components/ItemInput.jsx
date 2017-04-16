import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemInput extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value: props.value,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (e) {
		const { value } = e.target;
		const { onChange } = this.props;
		this.setState({ value }, () => onChange(value));
	}

	render () {
		const { value, onChange, ...props } = this.props;
		return (
			<input
				type="text"
				value={ value }
				onChange={ this.handleChange }
				{ ...props }
			/>
		);
	}
}

ItemInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};
