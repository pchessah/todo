import React, { useState } from "react";

function Form() {
  const [list, setList] = useState([""]);
  const [listItem, setItemList] = useState("");

  const handleChange = e => {
    setItemList(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, listItem]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What would you like to do?
          <input type="text" value={listItem} onChange={handleChange} />
        </label>
        <button type="submit">Enter</button>
      </form>
      <div>
        <h3>You have the following things to do</h3>
        {list.map((item, index) => {
          return (
            <ul>
              <li key={index}>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
export default Form;
