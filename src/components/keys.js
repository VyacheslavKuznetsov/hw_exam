import React from "react";
import { v4 as uuidv4 } from "uuid";

export class Keys extends React.Component {
  inputRef = React.createRef();

  taskCreator = (name) => ({
    id: uuidv4(),
    name: name,
    deleted: false,
  });

  state = {
    tasks: [this.taskCreator("Тестовое задание 1")],
  };


  handleClick = (e) => {
    const val = this.inputRef.current.value;
    if (val === "") {
      return;
    }
    const task = this.taskCreator(this.inputRef.current.value);
    const tasks = this.state.tasks.slice();
    tasks.push(task);
    this.setState({
      tasks: tasks,
    });
    this.inputRef.current.value = "";
  };

  handleRemove = (e) => {
    const tasks = this.state.tasks.slice();
    if (tasks.length === 0) {
      return;
    }
    tasks.pop();
    this.setState({
      tasks: tasks
    })
  }

  handleLineThrough = (e) => {
    const id = e.target.getAttribute('id');
    const tasks = this.state.tasks;
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.deleted = !task.deleted
      }
      return task
    })
    this.setState({
      tasks: newTasks
    })
  } 

  render() {
    return (
      <>
        <ul>
          {this.state.tasks.map((task) => (
            <li
              key={task.id}
              style={task.deleted ? { textDecoration: "line-through" } : {}}
            >
              {task.name}
              <button id={task.id} onClick={this.handleLineThrough}>x</button>
            </li>
          ))}
        </ul>
        <br />
        <label htmlFor="inputTask">Задача:</label>
        <input id="inputTask" type="text" ref={this.inputRef}></input>
        <button onClick={this.handleClick}>Добавить</button>
        <button onClick={this.handleRemove}>Удалить</button>
      </>
    );
  }
}
