'use client'
import {useState, useEffect} from 'react';
import TodoForm from "@/app/components/TodoForm";
import TodoList from '@/app/components/TodoListComponents';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("/api");
        if (!res.ok) throw new Error("Failed to fetch todos");

        const data = await res.json();
        console.log("Fetched Data:", data);
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 shadow-lg rounded bg-white">
      <h1 className="text-xl font-bold text-center">To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}