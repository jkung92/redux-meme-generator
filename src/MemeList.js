import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledList = styled.ul`
  background-color: lightgoldenrodyellow;
  & > li {
    position: relative;
  }
  #top {
    position: absolute;
    top: 0;
    color: white;
    z-index: 1;
    left: 35%;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000000;
  }
  #bot {
    position: absolute;
    bottom: 0;
    color: white;
    z-index: 1;
    left: 35%;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000000;
  }
`;

class MemeList extends Component {
  delete = evt => {
    this.props.dispatch({
      type: 'DELETE_MEME',
      payload: { id: evt.target.id }
    });
  };
  // change ids in divs to classNames
  render() {
    return (
      <StyledList>
        {this.props.memes.map(meme => (
          <li onClick={this.delete} id={meme.id}>
            <div id="top"> {meme.topText}</div>
            <img src={meme.imgUrl} alt="meme" />
            <div id="bot"> {meme.bottomText}</div>
          </li>
        ))}
      </StyledList>
    );
  }
}

function mapStateToProps(state) {
  return { memes: state.memes };
}

const connectToState = connect(mapStateToProps);

export default connectToState(MemeList);
