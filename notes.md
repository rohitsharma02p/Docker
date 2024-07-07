# Delete Docker image

docker image rm imageid

# Example:
```sh
docker image rm mynodeapp:latest
```

# Build the Docker image

docker build -t node-app-image .

# Example:
```sh
docker build -t mynodeapp .
```
# Create the container from an image

docker run -d --name node-app node-app-image

# Example:
```sh
docker run -d --name mynodeapp mynodeapp
```
# Delete the container

docker rm node-app -f

# Example:
```sh
docker rm mynodeapp -f
```
# List all running containers

docker ps

# Example:
```sh
docker ps
```
# Forward traffic from port 4000 to 3000 inside the container

docker run -p 4000:3000 -d --name node-app node-app-image

# Example:
```sh
docker run -p 4000:3000 -d --name mynodeapp mynodeapp
```
# List all files in the container

docker exec -it node-app bash

# Example:
```sh
docker exec -it mynodeapp bash
```
# Bind mount volume in Docker: Sync folder from local machine to Docker container

docker run -v $(pwd):/app -p 4000:3000 -d --name node-app node-app-image

# Example:
```sh
docker run -v /path/to/local/folder:/app -p 4000:3000 -d --name mynodeapp mynodeapp
```
# Another volume to prevent the node_modules from being overridden

docker run -v $(pwd):/app -v /app/node_modules -p 4000:3000 -d --name node-app node-app-image

# Example:
```sh
docker run -v $(pwd):/app -v /app/node_modules -p 4000:3000 -d --name mynodeapp mynodeapp
```
# Read-only volume

docker run -v $(pwd):/app:ro -v /app/node_modules -p 4000:3000 -d --name node-app node-app-image

# Example:
```sh
docker run -v $(pwd):/app:ro -v /app/node_modules -p 4000:3000 -d --name mynodeapp mynodeapp
```
# Pass environment variables in the container

docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=4000 -p 4000:4000 -d --name node-app node-app-image

# Example:
```sh
docker run -v $(pwd):/app:ro -v /app/node_modules --env PORT=4000 -p 4000:4000 -d --name mynodeapp mynodeapp
```
# Print environment variables

printenv

# Example:
```sh
printenv
```
# Pass env file

docker run -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 4000:5000 -d --name node-app node-app-image

# Example:
```sh
docker run -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 4000:5000 -d --name mynodeapp mynodeapp
```
# List all Docker volumes

docker volume ls

# Example:
```sh
docker volume ls
```
# Delete all unnecessary volumes

docker volume prune

# Example:
```sh
docker volume prune
```
# Delete the container and its volumes

docker rm node-app -fv

# Example:
```sh
docker rm mynodeapp -fv
```
# Create the image and run the container in detach mode

docker-compose up -d

# Example:
```sh
docker-compose up -d
```
# Down the container and remove unnecessary volumes

docker-compose down -v

# Example:
```sh
docker-compose down -v
```
# Run first config first, then run the second in detach mode and build the image again

docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build

# Example:
```sh
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
```
# Down the containers specified in the YAML files and remove associated volumes

docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v

# Example:
```sh
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v
```
# List Docker networks

docker network ls

# Example:
```sh
docker network ls
```
# Inspect a specific Docker network

docker network inspect <network-name>

# Example:
```sh
docker network inspect mynetwork
```

# creates a compressed archive named new-db-data.tar.gz from the contents of the new-db-data directory
```sh
tar -czf new-db-data.tar.gz new-db-data
```

# The command will extract the contents of new-db-data.tar.gz into the current directory, recreating the new-db-data directory and its contents.
```sh
tar -xzf new-db-data.tar.gz
```

```sh
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -v /Users/rohitsharma/Downloads/backend-codes/code/docker/data-backup:/var/lib/postgresql/data -p 5433:5432 -d postgres
```