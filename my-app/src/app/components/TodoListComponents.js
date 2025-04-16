"use client";

import { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos || [], // Initialize state with props
    };
  }

  componentDidUpdate(prevProps) {
    // Update state when new props are received
    if (prevProps.todos !== this.props.todos) {
      this.setState({ todos: this.props.todos });
    }
  }

  render() {
    const { todos } = this.state;
		// console.log('todoso', todos)

    if (!Array.isArray(todos) || todos.length === 0) {
      return <p>No tasks available.</p>;
    }

    return (
      <div className="mt-4">
        {todos.map((todo) => (
          <div key={todo.id} className="p-2 bg-gray-200 rounded my-2">
            {todo.text}
          </div>
        ))}
      </div>
    );
  }
}