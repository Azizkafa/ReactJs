"use client";

import { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text) return;

    const newTodo = { text: this.state.text };

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });

      if (!response.ok) throw new Error("Failed to add todo");

      const createdTodo = await response.json();
      
      this.props.onAdd(createdTodo);
      this.setState({ text: "" });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flex gap-2 mt-4">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter a task..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </form>
    );
  }
}