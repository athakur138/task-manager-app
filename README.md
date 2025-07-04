# Task Manager App

A full-stack project to showcase ReactJS (frontend), Node.js (backend), MySQL (database), Docker, and DevOps skills.

## Features

- CRUD Tasks (Create, Read, Update, Delete)
- ReactJS frontend
- Node.js + Express backend
- MySQL database
- Dockerized setup (backend, frontend, and DB)
- DevOps ready

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

### Run Locally

1. **Clone the repo:**
   ```sh
   git clone https://github.com/athakur138/task-manager-app.git
   cd task-manager-app
   ```

2. **Start everything:**
   ```sh
   docker-compose up --build
   ```

3. **Access the app:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api/tasks

### DevOps/Deployment

- Once running locally, you can push this setup to GitHub and deploy using:
  - [Render](https://render.com/)
  - [Railway](https://railway.app/)
  - [Vercel](https://vercel.com/) (Frontend only; backend can be deployed to Render/Railway)
- Update DB credentials for production use.

### Folder Structure

```
task-manager-app/
├── backend/
├── frontend/
├── db/
├── docker-compose.yml
└── README.md
```

## Customization

- Add authentication, more fields, or integrations to improve your project further!

---

## License

MIT