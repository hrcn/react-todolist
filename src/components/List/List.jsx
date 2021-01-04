import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item/Item'

export default class List extends Component {
  // constrain props
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props

    return (
      <ul>
        {
          todos.map(task => {
            return <Item key={task.id} {...task} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}
