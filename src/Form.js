import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", list: [] };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    this.setState(state => {
      return {
        list: state.list.concat(this.state.value)
      };
    });
  };

  componentDidMount (){
    try{
      const json = localStorage.getItem("list")
      const list = JSON.parse(json)

      if (list){
        this.setState(()=>({list}))
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prev_state){
    if(prev_state.list.length !== this.state.list.length){
      const json = JSON.stringify(this.state.list)
      localStorage.setItem('list', json)
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <legend>Enter Item to do</legend>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Enter</button>
        </form>
        <div>
          <h2>The List</h2>
          <ul>
            {this.state.list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;
