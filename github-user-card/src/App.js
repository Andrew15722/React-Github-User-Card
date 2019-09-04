import React from 'react';
import './App.css';
import GithubUserCard from './components/gitHubUserCard';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<GithubUserCard userName={'Andrew15722'} />
			</div>
		);
	}
}

export default App;
