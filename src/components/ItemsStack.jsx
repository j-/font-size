import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemRootContainer from './ItemRootContainer';
import ItemContainer from './ItemContainer';
import RemoveButtonContainer from './RemoveButtonContainer';

const getStackElements = (count) => {
	const elements = [];
	for (let i = 0; i <= count; i++) {
		elements.push(
			<li key={ i } value={ i + 1 } className="font-size-item">
				<ItemContainer index={ i } />
				{ i < count && <RemoveButtonContainer index={ i } /> }
			</li>
		);
	}
	return elements;
};

export default class ItemsStack extends Component {
	constructor (props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown (e) {
		if (e.target.tagName !== 'INPUT') {
			return;
		}
		switch (e.key) {
			case 'ArrowUp': return this.handleArrowUp(e);
			case 'ArrowDown': return this.handleArrowDown(e);
		}
	}

	handleArrowUp (e) {
		e.preventDefault();
		this.focusPreviousInput(e);
	}

	handleArrowDown (e) {
		e.preventDefault();
		this.focusNextInput(e);
	}

	focusPreviousInput (e) {
		const inputs = this.refs.items.querySelectorAll('input');
		const index = [...inputs].findIndex((input) => input === e.target);
		const prev = inputs[index - 1];
		if (prev) {
			prev.focus();
		}
	}

	focusNextInput (e) {
		const inputs = this.refs.items.querySelectorAll('input');
		const index = [...inputs].findIndex((input) => input === e.target);
		const next = inputs[index + 1];
		if (next) {
			next.focus();
		}
	}

	render () {
		const { count } = this.props;
		return (
			<ol ref="items" className="font-size-items" onKeyDown={ this.handleKeyDown }>
				<li value={ 0 } className="font-size-item font-size-item--root">
					<ItemRootContainer />
				</li>
				{ getStackElements(count) }
			</ol>
		);
	}
}

ItemsStack.propTypes = {
	count: PropTypes.number.isRequired,
};
