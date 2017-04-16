import React from 'react';
import ItemsStackContainer from './ItemsStackContainer';

const App = () => (
	<div>
		<h1>Font size</h1>
		<ul>
			<li><a href="https://developer.mozilla.org/en/docs/Web/CSS/font-size">'font-size' on MDN</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length">'&lt;length&gt;' on MDN</a></li>
			<li><a href="http://pxtoem.com/">PXtoEM.com</a></li>
		</ul>
		<ItemsStackContainer />
	</div>
);

export default App;
