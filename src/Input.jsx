import { useState } from "react";

function Input({ handleAdd }) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      handleAdd(inputText);
      setInputText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        className="input"
      ></input>
      <button onClick={handleAddTodo}> Add Task </button>
    </div>
  );
}
export default Input;
