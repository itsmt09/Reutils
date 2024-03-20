import React from "react";
import { useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  function handleTitleAddition(e) {
    setTitle(e.target.value);
  }
  function handleAddItems() {
    setItems((i) => [...i, title]);
    setTitle("");
  }
  function handleRemoveItems(idx) {
    setItems((prevItems) => prevItems.filter((_, id) => id !== idx));
    console.log(items);
  }
  function handleRenderItem(e, idx) {
    e.preventDefault();
    const item = items[idx];
    setTitle(item);
  }
  function handleEditItem(e, idx) {
    e.preventDefault();
    const item = items[idx];
    let newItem = prompt(`update ${item}`, item);
    setItems((prevItems) =>
      prevItems.map((item, id) => (id === idx ? newItem : item))
    );
  }
  function handleUpdateButton(idx) {
    setItems((prevItems) =>
      prevItems.map((item, id) => (id === idx ? title : item))
    );
    console.log(items);
  }
  function handleUpdateItem(idx) {
    const newItems = [...items];
    const newItem = prompt(`Update this item`);
    if (newItems.indexOf(newItem) !== -1) {
      alert("Item Already Exists");
      console.log(`inside if :- ${items}`);
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
          id="input"
          type="text"
          placeholder="Add a Note Title"
          value={title}
          onChange={handleTitleAddition}></input>
        <button onClick={handleAddItems}>ADD</button>
        <button onClick={() => console.log(items)}>Console</button>
      </div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item}&nbsp;
            <button onClick={() => handleRemoveItems(idx)}>Remove</button>
            <button onClick={(e) => handleRenderItem(e, idx)}>Edit</button>
            <button onClick={() => handleUpdateButton(idx)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
