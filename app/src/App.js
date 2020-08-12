import React from 'react';
import Header from './components/Header';
import { Container, Box } from '@material-ui/core';
import CardList from './components/CardList';

function App() {



  return (
    <div className="App">
      <Header />
      <Container>
          <CardList />
      </Container>
    </div>
  );
}

export default App;
