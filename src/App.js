import Im from "./Componennts/Left/Im";
import Main from "./Componennts/Main/Main";
import Buttons from "./Componennts/Right/Buttons";
import "./App.scss"
import { createContext, useState } from "react";

export const Cont = createContext()
function App() {

  const [name,setName] = useState("about")

  return (
    <div className="App">
      <Cont.Provider value={{
        name:name,
        setName:setName,
      }}>
      <Im />
      <Main />
      <Buttons />
      </Cont.Provider>
    
    </div>
  );
}

export default App;
