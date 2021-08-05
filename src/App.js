import React, { useState } from "react";

import "./App.css";
import Botoncito from "./Button";

function App() {
  const [login, setLogin] = useState(true); //bool
  console.log(login);

  const buttons = [
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
    <Botoncito name="Register" onClick={() => setLogin(!login)} />,
  ];

  return (
    <div className="App">
      <main>
        {login ? (
          <Botoncito name="Login" onClick={() => setLogin(!login)} />
        ) : (
          <Botoncito name="Register" onClick={() => setLogin(!login)} />
        )}

        {buttons.map((button) => button)}
      </main>
    </div>
  );
}

export default App;
