import styled, { css } from "styled-components";
import { useState } from "react";
export const App = () => {
  const INITIAL_STATE = 0;
  const [counter, setCounter] = useState(INITIAL_STATE);
  const [actionHistory, setActionHistory] = useState([]);

  const handleUserAction = (action) => {
    if (action === 'up') {
      actionHistory.push('up');
      setCounter(counter + 1);
    }
    if (action === 'down') {
      actionHistory.push('down');
      setCounter(counter - 1)
    }
    if (action === 'reset') {
      setActionHistory([]);
      setCounter(INITIAL_STATE);
    }
  }
  
  return (
    <CounterContainer>
      <CounterStyle>{counter}</CounterStyle>
      <EmojiPanel>
        <EmojiButtonLeft onClick={() => handleUserAction('up')}>😄
          <CounterStyle>{actionHistory.filter(x => x === 'up').length}</CounterStyle>
        </EmojiButtonLeft>
        <EmojiButtonRight onClick={() => handleUserAction('down')}>😭
          <CounterStyle>{actionHistory.filter(x => x === 'down').length}</CounterStyle>
        </EmojiButtonRight>
      </EmojiPanel>
      <EmojiButton onClick={() => handleUserAction('reset')}>RESET</EmojiButton>
    </CounterContainer>
  );
};

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

const CounterStyle = styled.div`
  font-size: 72px;
`;

const EmojiPanel = styled.div`
  display: row;
  justify-content: row;
  align-items: center;
  padding: 10px 15px;
  background: #ffffff;
`;

const commonButtonStyle = css`
  background:  "#ffffff";
  color:  "white" ;
  font-size: 52px;
  padding: 0.25em 1em;
  border: 1px solid #000;

  :hover {
    background: burlywood;
  }

  :active {
    opacity: 0.7;
  }  
`;

const EmojiButton = styled.button`
  ${commonButtonStyle}
  border-radius: 15px 15px 15px 15px;
`;

const EmojiButtonLeft = styled.button`
  ${commonButtonStyle}
  border-radius: 15px 0 0 15px;
`;

const EmojiButtonRight = styled.button`
  ${commonButtonStyle}
  border-radius: 0 15px 15px 0;
`;


