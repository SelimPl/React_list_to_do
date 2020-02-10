import React from "react";
// import logo from './logo.svg';
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends React.Component {
  counter = 0;
  state = {
    tasks: []
  };

  deleteTask = id => {
    // console.log("del w App  " + id);
    // const tasks = [...this.state.tasks];

    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index,1)

    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    // console.log("change w App  " + id);

    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };
  addTask = (text,date,important) => {
    // console.log("dodany");
    const task = {
      id: this.counter,
      text,
      date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;
    // console.log(task,this.counter)
    this.setState(prevState => ({
      tasks:[...prevState.tasks,task]
    }))
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1> Do zrobienia! </h1> <AddTask add={this.addTask} />{" "}
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />{" "}
      </div>
    );
  }
}

export default App;
