import React, { useState } from "react";

import "./App.css";
import Botoncito from "./Button";

function App() {
  const [login, setLogin] = useState(true); //bool
  console.log(login);

  // Callback
  setTimeout(() => {}, 5000); //5 sec

  // Promise
  const num = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(56);
    }, 5000);
  });

  num
    .then((value) => {
      console.log(value);
    })
    .catch((err) => console.log(err));

  // async/await
  const asyncFunction = async () => {
    const asyncNum = await num;
    console.log({ asyncNum });
  };

  asyncFunction();

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
