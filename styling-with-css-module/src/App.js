import React, { useState } from 'react';
import Checkox from './components/Checkbox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <Checkox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </Checkox>
    </div>
  );
}

export default App;
