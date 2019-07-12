import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Desserts from "./containers/Main/Desserts";
import Form from "./containers/Main/Form";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#E9B96E" }}>
      <Navbar />
      <Desserts />
      <Form />
    </div>
  );
}

export default App;
