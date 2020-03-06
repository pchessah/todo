import React, { useState } from "react";

function Form() {
  const [list, setList] = useState([]);
  const [listItem, setItemList] = useState("");
  const [checkList, setCheckList] = useState([]);

  const handleChange = e => {
    setItemList(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setList([...list, listItem]);
    setItemList("");
  };

  const handleDelete = ({ item }) => {
    const filteredArray = [...list];
    const newList = filteredArray.filter(otherItems => {
      return otherItems !== item;
    });
    setList(newList);
  };
  const handleEdit = ({ item }) => {
    let newListItem = window.prompt("Enter new item");
    const filteredArray = [...list];
    filteredArray.splice(filteredArray.indexOf(item), 1, newListItem);
    setList(filteredArray);
  };

  const handleDone = ({ item }) => {
    const filteredArray = [...list];
    let doneList = filteredArray.filter(doneListItems => {
      return doneListItems === item;
    });
    const newList = filteredArray.filter(otherItems => {
      return otherItems !== item;
    });
    setCheckList([...checkList, ...doneList]);
    setList(newList);
  };

  const handleReset = () => {
    setCheckList([]);
    setList([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          What would you like to do?{"   "}
          <input type="text" value={listItem} onChange={handleChange} />
        </label>
        <button type="submit" className="btn btn-primary">
          Enter
        </button>
        <button onClick={handleReset}> Reset List </button>
      </form>
      <h3>Tasks to be done</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Edit/Delete</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => handleEdit({ item })}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete({ item })}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleDone({ item })}
                    >
                      Done
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <br />
      <hr />
      <h2>Completed tasks</h2>
      <table>
        <thead>
          <tr>
            <th> # </th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {checkList &&
            checkList.map((itemChecked, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{itemChecked}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default Form;
