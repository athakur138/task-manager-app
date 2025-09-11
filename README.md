> For common Docker and service commands, see [REFERENCE.md](REFERENCE.md).

# Task Manager App

## Quick Start

1. **Clone the repo & enter the folder:**

```sh
git clone <your-repo-url>
cd task-manager-app
```

2. **Create a `.env` file in the root:**

```env
MYSQL_ROOT_PASSWORD=rootpass
DB_DATABASE=taskmanager
DB_USER=taskuser
DB_PASSWORD=taskpass
```

3. **Build and run all services:**

```sh
docker-compose up --build -d
```

4. **Access the app:**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## Folder Structure

```
task-manager-app/
├── backend/              # Backend source code & Dockerfile
├── frontend/             # Frontend source code & Dockerfile
├── db/                   # Database initialization scripts
│   └── init.sql
├── docker-compose.yml    # Orchestrates all services
├── .env                  # Environment variables
└── README.md
```

---

## Docker Compose Services

| Service  | Image                         | Ports | Notes                       |
| -------- | ----------------------------- | ----- | --------------------------- |
| db       | mysql:8                       | 3306  | Initializes via db/init.sql |
| backend  | athakurcovdev/backend:latest  | 5000  | Connects to db              |
| frontend | athakurcovdev/frontend:latest | 3000  | Connects to backend         |

---

## Common Commands

**Build and push images:**

```sh
docker build -t athakurcovdev/backend:latest ./backend
docker push athakurcovdev/backend:latest

docker build -t athakurcovdev/frontend:latest ./frontend
docker push athakurcovdev/frontend:latest
```

**Start services:**

```sh
docker-compose up -d
```

**Stop services:**

```sh
docker-compose down
```

**Update images:**

```sh
docker pull athakurcovdev/backend:latest
docker pull athakurcovdev/frontend:latest
docker-compose up -d
```

---

## Deploying on a Server (VM)

1. Install Docker & Docker Compose on the server.
2. Copy your project and update `.env` for production.
3. Use Docker Hub images in `docker-compose.yml`:

```yaml
backend:
  image: athakurcovdev/backend:latest
frontend:
  image: athakurcovdev/frontend:latest
```

4. SSH into the server and run:

```sh
docker pull athakurcovdev/backend:latest
docker pull athakurcovdev/frontend:latest
docker-compose up -d
```

5. Check status:

```sh
docker ps
docker-compose logs -f
```

---

## CI/CD Pipeline (Azure DevOps)

1. **Build & Push Docker Images:**

- CI pipeline builds and pushes backend & frontend images to Docker Hub.

2. **Deploy to VM:**

- CD pipeline pulls images from Docker Hub and runs containers.

_Tip: Tag images with commit SHA or build ID for rollback/versioning._

---

## Notes

- Database data persists as long as `db/init.sql` and Docker volumes are intact.
- Ensure `.env` is consistent between local and server environments.
- For multi-environment setups, use different Docker tags (dev, staging, prod).
