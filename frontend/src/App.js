import React, { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [tasks, setTasks] = useState([])
  const [newTitle, setNewTitle] = useState("")

  const fetchTasks = async () => {
    const res = await axios.get("http://23.22.187.162:5000/api/tasks")
    setTasks(res.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const addTask = async () => {
    if (!newTitle) return
    await axios.post("http://23.22.187.162:5000/api/tasks", { title: newTitle })
    setNewTitle("")
    fetchTasks()
  }

  const updateTask = async (id, title) => {
    const newTitle = prompt("Update task title:", title)
    if (newTitle) {
      await axios.put(`http://23.22.187.162:5000/api/tasks/${id}`, {
        title: newTitle,
      })
      fetchTasks()
    }
  }

  const deleteTask = async (id) => {
    await axios.delete(`http://23.22.187.162:5000/api/tasks/${id}`)
    fetchTasks()
  }

  return (
    <div style={{ margin: 40 }}>
      <h1>Task Manager</h1>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => updateTask(task.id, task.title)}>
              Edit
            </button>{" "}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
