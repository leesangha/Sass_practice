import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';
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
          <Button color="gray" size="large" outline>
            Button
          </Button>
          <Button color="gray">Button </Button>
          <Button color="gray" size="small">
            Button
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="blue" size="large" fullWidth>
            Button
          </Button>
        </ButtonGroup>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
