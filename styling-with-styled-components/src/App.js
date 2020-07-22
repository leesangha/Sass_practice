import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};
function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button color="gray" size="large">
            Button
          </Button>
          <Button color="gray">Button </Button>
          <Button color="gray" size="small">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="blue" size="large">
            Button
          </Button>
          <Button color="blue">Button </Button>
          <Button color="blue" size="small">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large">
            Button
          </Button>
          <Button color="pink">Button </Button>
          <Button color="pink" size="small">
            Button
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
