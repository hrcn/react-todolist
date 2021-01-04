import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  // initial state
  state = {
    todos: [
      {id: '001', name: 'eat', done: true},
      {id: '002', name: 'sleep', done: true},
      {id: '003', name: 'code', done: false},
    ]
  }

  // 用于添加一个 todo，接收的参数是 todo 对象
  addTask = (task) => {
    const { todos } = this.state
    const newTodos = [task, ...todos]
    this.setState({todos: newTodos})
  }

  // 更新一个 todo 对象
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTask = todos.map(task => {
      if (task.id === id) {
        return {...task, done}
      } else {
        return task
      }
    })
    this.setState({todos: newTask});
  }

  // 删除一个 todo 对象
  deleteTodo = (id) => {
    const { todos } = this.state
    // 删除指定 id 的 todo 对象
    const newTask = todos.filter(task => {
      return task.id !== id
    })
    this.setState({todos: newTask})
  }

  checkAllTodo = finished => {
    const { todos } = this.state
    // change all tasks to done
    const newTask = todos.map(task => {
      return {...task, done: finished}
    })
    this.setState({todos: newTask})
  }

  clearAllDone = () => {
    const { todos } = this.state
    const newTask = todos.filter(task => {
      return task.done === false;
    })
    this.setState({todos: newTask})
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <Header addTask={this.addTask} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
      </div>
    )
  }
}