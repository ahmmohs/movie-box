import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styles/styles.css';

import Navbar from './Navbar';

class App extends React.Component {
	render() {
    	return (
      		<BrowserRouter>
        		<div className="container">
					<Navbar />
        		</div>
      		</BrowserRouter>
    	);
  	}
}

export default App;

