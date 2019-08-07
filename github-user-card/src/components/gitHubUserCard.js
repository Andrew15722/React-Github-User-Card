import React from 'react';
import axios from 'axios';

class GithubUserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { imgUrl: '', name: '' };
	}

	async componentDidMount() {
		const url = `https://api.github.com/users/${this.props.userName}`;
		let response = await axios.get(url);
		let data = response.data;
		this.setState({ imgUrl: data.avatar_url, name: data.name });
		console.log(response.data);
	}

	render() {
		return (
			<div>
				<h1>GithubUserCard </h1>
				<img src={this.state.imgUrl} alt="" />
				<h2>{this.state.name}</h2>
			</div>
		);
	}
}

export default GithubUserCard;
