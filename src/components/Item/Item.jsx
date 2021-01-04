import React, { Component } from 'react'

export default class Item extends Component {
  state = {
    // hovering on it?
    mouse: false
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDelete = (id) => {
    if (window.confirm('sure to delete this one?')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    
    return (
      <li
        style={{backgroundColor: mouse ? 'gray' : 'white'}}
        onMouseLeave={this.handleMouse(false)} 
        onMouseEnter={this.handleMouse(true)} >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={e => this.handleDelete(id)} style={{display: mouse ? 'block' : 'none'}}>
          delete
        </button>
      </li>
    )
  }
}
