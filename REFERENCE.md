# Reference Commands

For quick reference, here are common Docker and service commands used in this project:

```sh
# Build and push backend
docker build -t your-dockerhub-username/backend:latest ./backend
docker push your-dockerhub-username/backend:latest

# Build and push frontend
docker build -t your-dockerhub-username/frontend:latest ./frontend
docker push your-dockerhub-username/frontend:latest

# Start services
docker-compose up -d

# Check running containers
docker ps

# Stream logs
docker-compose logs -f

# Stop services
docker-compose down

# Update images
docker pull your-dockerhub-username/backend:latest
docker pull your-dockerhub-username/frontend:latest
docker-compose up -d

# Versioned build and deploy
docker build -t your-dockerhub-username/backend:<commit_sha> ./backend
docker push your-dockerhub-username/backend:<commit_sha>
docker pull your-dockerhub-username/backend:<commit_sha>
docker-compose up -d
```

_Note: These commands are referenced throughout the README in relevant sections for context._
