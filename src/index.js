import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createHashHistory } from 'history';

import Detail from './pages/Detail';

ReactDOM.render(
	<Router history={hashHistory}>
	<Route path="/" component={ Detail } />
	</Router>,
	document.getElementById('app')
);
