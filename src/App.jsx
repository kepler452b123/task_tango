import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./Task";
import Input from "./Input";
import "./App.css";

function App() {
  const [lsTasks, setLsTasks] = useState([]);
  function addTask(text) {
    setLsTasks([...lsTasks, text]);
  }
  const todoComponents = lsTasks.map((text, index) => (
    <Todo key={index} text={text} />
  ));

  return (
    <>
      <div>
        <h1 className="cool-title">Todo List</h1>
        {todoComponents}
      </div>
      <div>
        <Input handleAdd={addTask}> </Input>
      </div>
    </>
  );
}

export default App;
