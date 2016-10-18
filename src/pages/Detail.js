import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  render() {
    //return <p>{this.props.message}</p>;
    //return <p>Hello {chance.first()}!</p>;
    return (<div>
             <p>Hello {chance.first()}!</p>
						<p>You're from {chance.country({ full: true })}.</p>
					  </div>);
/*
    {
        chance.first() == 'John'
        ? 'Hello, John!'
        : 'Hello, world!'
    }
    </p>;
*/
  }
}

export default Detail;
