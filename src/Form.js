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

  const handleDelete = ({item}) => {
  const filteredArray = [...list]
  filteredArray.splice(filteredArray.indexOf(item), 1)
  setList(filteredArray)
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
                <li key={index} id={index}>
                  {item} <br />
                  <button> Edit </button>{" "}
                  <button onClick={()=>handleDelete({item})} > Delete </button>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}
export default Form;
