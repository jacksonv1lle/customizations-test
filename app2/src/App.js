import React from 'react';
import './App.css';
import { PrimaryButton, createTheme, Customizer } from "office-ui-fabric-react";
import { App1 } from "app1";

const theme = createTheme({
  palette: {
    themePrimary: "red"
  }
});

function App() {
  return (
    <Customizer settings={{theme}}>
      <div>
        <PrimaryButton text="app2 here"/>
      </div>
      <div>
        <App1 />
      </div>
    </Customizer>
  );
}

export default App;
