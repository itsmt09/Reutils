import React from "react";
import { useState } from "react";
export default function Todo() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  function handleTitleAddition(e) {
    setTitle(e.target.value);
  }
  function handleAddItems() {
    setItems((i) => [...i, title]);
    setTitle("");
  }
  function handleRemoveItems(item) {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
    console.log(items);
  }
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <input
          type="text"
          placeholder="Add a Note Title"
          value={title}
          onChange={handleTitleAddition}></input>
        <button onClick={handleAddItems}>ADD</button>
      </div>
      <ul>
        {items.map((item, idx) => (
          <div>
            <li key={idx}>{item}</li>
            <button onClick={() => handleRemoveItems(item)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
