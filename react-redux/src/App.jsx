import { useState } from "react";
// import Cake from "./components/Cake";
import HookCake from "./components/HookCake";
import IceCream from "./components/IceCream";
import NewCake from "./components/NewCake";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NewCake />
      <IceCream />
      {/* <Cake /> */}
    </>
  );
}

export default App;
