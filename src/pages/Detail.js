import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  render() {
    //return <p>{this.props.message}</p>;
    //return <p>Hello {chance.first()}!</p>;
    return <p>
    {
        chance.first() == 'John'
        ? 'Hello, John!'
        : 'Hello, world!'
    }
    </p>;
  }
}

export default Detail;
