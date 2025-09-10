import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const db1 = mysql.createConnection({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "appuser",
  password: process.env.DB_PASSWORD || "ats123",
  database: process.env.DB_DATABASE || "taskdb",
})

app.get("/api/tasks", (req, res) => {
  db1.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json({ error: err })
    res.json(results)
  })
})

app.post("/api/tasks", (req, res) => {
  const { title } = req.body
  db1.query("INSERT INTO tasks (title) VALUES (?)", [title], (err, results) => {
    if (err) return res.status(500).json({ error: err })
    res.json({ id: results.insertId, title })
  })
})

app.put("/api/tasks/:id", (req, res) => {
  const { title } = req.body
  const { id } = req.params
  db1.query("UPDATE tasks SET title=? WHERE id=?", [title, id], (err) => {
    if (err) return res.status(500).json({ error: err })
    res.json({ id, title })
  })
})

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params
  db1.query("DELETE FROM tasks WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ error: err })
    res.json({ id })
  })
})

app.listen(5000, () => {
  console.log("Backend running on port 5000")
})
