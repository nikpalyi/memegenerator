import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '', //top text
      text1: '' //bottom text
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to the Meme Generator!</h2>
        <h4>
          <i>Write Some Text</i>
        </h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>{' '}
            <FormControl
              type='text'
              onChange={event => this.setState({ text0: event.target.value })}
            />
          </FormGroup>{' '}
          <FormGroup>
            <FormLabel>Bottom</FormLabel>{' '}
            <FormControl
              type='text'
              onChange={event => this.setState({ text1: event.target.value })}
            />
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <MemeItem key={index} meme={meme} />;
        })}
        <div
          className='meme-button'
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load 10 more memes...
        </div>
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
