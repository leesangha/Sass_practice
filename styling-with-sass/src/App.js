import React from "react";
import Button from "./components/Button";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button color="blue" size="large">
          Buttons
        </Button>
        <Button color="blue" size="medium">
          Buttons
        </Button>
        <Button color="blue" size="small">
          Buttons
        </Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          Buttons
        </Button>
        <Button color="gray" size="medium">
          Buttons
        </Button>
        <Button color="gray" size="small">
          Buttons
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          Buttons
        </Button>
        <Button color="pink" size="medium">
          Buttons
        </Button>
        <Button color="pink" size="small">
          Buttons
        </Button>
      </div>
    </div>
  );
}

export default App;
