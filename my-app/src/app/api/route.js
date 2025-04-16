const apiUrl = "http://localhost:3030/todos";

export async function GET(req) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const todos = await response.json();
    // console.log("Todos from API:", todos);

    return Response.json(todos, { status: 200 });
  } catch (error) {
    console.error("API Fetch Error:", error);
    return Response.json({ error: "Failed to fetch todos" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const newTodo = await req.json();
    console.log("New Todo:", newTodo);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    if (!response.ok) throw new Error("Failed to create todo");

    const createdTodo = await response.json();
    return Response.json(createdTodo, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return Response.json({ error: "Failed to add todo" }, { status: 500 });
  }
}