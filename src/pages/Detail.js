import React from 'react';

class Detail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div>
				{this.state.people.map((person, index) => (
							<p key={index}>Hello, {person.name} from {person.country}!</p>
							))}
				</div>);
	}
}

export default Detail;
