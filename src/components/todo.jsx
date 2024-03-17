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
  function handleUpdateItem(idx) {
    const newItems = [...items];
    const item = newItems[idx];
    let newItem = prompt(`update ${item}`, item);
    if (newItems.indexOf(newItem) !== -1) {
      alert("Item Already Exists");
      console.log(items);
    } else {
      newItems.splice(idx, 1, newItem);
      setItems(newItems);
    }
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
            <button onClick={() => handleUpdateItem(idx)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
