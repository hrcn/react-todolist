import React, { Component } from 'react'

export default class Footer extends Component {
  handleCheckAll = e => {
    this.props.checkAllTodo(e.target.checked)
  }

  handleClearAll = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props;
    const finished = todos.reduce((pre, curr) => {
      return pre + (curr.done ? 1 : 0)
    }, 0)
    const total = todos.length

    return (
      <div>
        <label>
          <input type="checkbox" checked={finished === total && total !== 0} onChange={this.handleCheckAll} />
        </label>
        <div>
          <span>finished: {finished}</span> / {total}
        </div>
        <button onClick={this.handleClearAll}>clear all</button>
      </div>
    )
  }
}
