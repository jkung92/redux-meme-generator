import React, { Component } from 'react';
import './App.css';
import MemeList from './MemeList';
import AddMemeForm from './AddMemeForm';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: peachpuff;
  & > h1 {
    color: steelblue;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <h1> Meme Maker!</h1>
        <AddMemeForm />
        <MemeList />
      </StyledApp>
    );
  }
}

// function mapStateToProps(state) {
//   return { memes: state.memes };
// }

// const connectToState = connect(mapStateToProps);

export default App;
