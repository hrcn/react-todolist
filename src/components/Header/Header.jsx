import React, { Component } from 'react'
import { nanoid } from 'nanoid';

export default class Header extends Component {
  handleKeyUp = (e) => {
    const { keyCode, target } = e
    // pressed enter?
    if (keyCode !== 13) return
    // not null
    if (target.value.trim() === '') {
      alert('enter something!')
      return
    }
    const task = {id: nanoid(), name: target.value, done: false}
    // 将 task 传递给 App
    this.props.addTask(task)
  }

  render() {
    return (
      <div className="header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="add your task, then press Enter" />
      </div>
    )
  }
}
