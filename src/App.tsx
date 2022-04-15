import React, { FC } from 'react';

import Header from './components/Header';

import './App.scss';

const App: FC = () => (
	<div className="app">
		<div className="app-content">
			<Header />
		</div>
	</div>
);

export default App;
