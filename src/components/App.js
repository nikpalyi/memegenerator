import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Meme Generator!</h2>
        {this.props.memes.map((meme, index) => {
          return <h4 key={index}>{meme.name}</h4>;
        })}
      </div>
    );
  }
}

//allow us to access these memes from STORE in App comp
//this is the first parameter of connect function
function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(App);
