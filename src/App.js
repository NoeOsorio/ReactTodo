import React, { useEffect, useState } from "react";

import "./App.css";
import Botoncito from "./Button";
import getList from "./Provider";
import Pokemon from "./Pokemon";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./redux/reducers/pokemonReducer";

function App() {
  const [login, setLogin] = useState(true); //bool
  // const [pokemons, setPokemons] = useState([]);
  const pokemons = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  console.table(pokemons);

  // // Callback
  // setTimeout(() => {}, 5000); //5 sec

  // // Promise
  // const num = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(56);
  //   }, 5000);
  // });

  // num
  //   .then((value) => {
  //     console.log(value);
  //   })
  //   .catch((err) => console.log(err));

  // // async/await
  // const asyncFunction = async () => {
  //   const asyncNum = await num;
  //   console.log({ asyncNum });
  // };

  // asyncFunction();

  const getListUI = async () => {
    const response = await getList();
    dispatch(setPokemons(response.data.results));
  };

  useEffect(() => {
    getListUI();
  }, []);

  return (
    <div id="app" className="App">
      <main>
        {login ? (
          <Botoncito name="Login" onClick={() => setLogin(!login)} />
        ) : (
          <Botoncito name="Register" onClick={() => setLogin(!login)} />
        )}

        {pokemons.map((value) => (
          <Pokemon pokemon={value} />
        ))}
      </main>
    </div>
  );
}

export default App;
