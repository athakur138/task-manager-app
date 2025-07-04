const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "my-secret-pw",
  database: "taskdb",
});

app.get("/api/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  db.query(
    "INSERT INTO tasks (title) VALUES (?)",
    [title],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: results.insertId, title });
    }
  );
});

app.put("/api/tasks/:id", (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  db.query(
    "UPDATE tasks SET title=? WHERE id=?",
    [title, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id, title });
    }
  );
});

app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.query(
    "DELETE FROM tasks WHERE id=?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id });
    }
  );
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});