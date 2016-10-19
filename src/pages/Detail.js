import React from 'react';
import ajax from 'superagent';

class Detail extends React.Component {
	constructor(props) {
		super(props);

    this.state = { commits: [] };
	}

	componentWillMount() {
		ajax.get('https://api.github.com/repos/facebook/react/commits')
			.end((error, response) => {
				if (!error && response) {
					this.setState({ commits: response.body });
				} else {
					console.log('There was an error fetching from GitHub', error);
				}
			});
	}

	render() {
		return (<div>
				{this.state.commits.map((commit, index) => (
							<p key={index}>
									<strong>{commit.author.login}</strong>:
									<a href={commit.html_url}>{commit.commit.message}</a>.
							</p>
							))}
				</div>);
	}
}

export default Detail;
