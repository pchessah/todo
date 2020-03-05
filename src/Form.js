import React, { useState } from "react";

function Form() {
  const [list, setList] = useState([]);
  const [listItem, setItemList] = useState("");

  const handleChange = e => {
    setItemList(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, listItem]);
    setItemList("");
  };

  const handleDelete = e => {
    const index = e.target.getAttribute("key")
    setList(list.filter(item => list.key !== index))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What would you like to do?{"   "}
          <input type="text" value={listItem} onChange={handleChange} />
        </label>
        <button type="submit">Enter</button>
      </form>
      <div>
        {list &&
          list.map((item, index) => {
            return (
              <ul>
                <li key={item.index}>{item}</li>
                <button> Edit </button>{" "}
                <button onClick={handleDelete}> Delete </button>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
export default Form;
