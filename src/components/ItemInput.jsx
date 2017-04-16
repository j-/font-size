import React, { Component } from 'react';

export default class ItemInput extends Component {
	constructor (props) {
		super(props);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleBlur (e) {
		this.props.onChange(e.target.value);
	}

	handleKeyDown (e) {
		if (e.key !== 'Enter') {
			return;
		}
		this.props.onChange(e.target.value);
	}

	render () {
		const { value, onChange, ...props } = this.props;
		return (
			<input
				type="text"
				defaultValue={ value }
				onBlur={ this.handleBlur }
				onKeyDown={ this.handleKeyDown }
				{ ...props }
			/>
		);
	}
}
