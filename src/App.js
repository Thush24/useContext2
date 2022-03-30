import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";

const ExampleContext = createContext("Initial Value");

function App() {
  return (
    <ExampleContext.Provider value="A simple example of useContext">
      <ChildComponent />
    </ExampleContext.Provider>
  );
}

function ChildComponent() {
  const valueFromContext = useContext(ExampleContext);
  return <h1>{valueFromContext}</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;