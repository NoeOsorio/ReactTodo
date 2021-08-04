import "./App.css";
import Botoncito, { ButtonSimple } from "./Button";

function App() {
  return (
    <div className="App">
      <main>
        <Botoncito name="Login" />
        <ButtonSimple name="Registrate" />
      </main>
    </div>
  );
}

export default App;
