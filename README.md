# Canvass

A simple application for saving a person's name and some related notes, which could be helpful if someone was canvassing door-to-door.

## Overview
The application uses Java 20 and the Spring Boot framework for the backend. This leverages Java JPA and Spring Data for writing to a database.

The database is MariaDB running in Docker. On load, the `./database/init` folder is mounted to `/docker-entrypoint-initdb.d` to automatically create the db and populate with some test data.

The frontend is a react application written in typescript. It uses react-router for routing to the two pages, the create page and the view all page. It is set up to run in nginx, but to run locally you can add `"proxy": "http://localhost:8088",` to the `application.json` file to have the build in dev server handle proxying.

## Development
To run locally, assuming you have `node`, Java 20, and docker:
1. Deploy the database locally via docker run or docker-compose.

```
$ docker run -d --name canvass-mariadb --env MARIADB_ROOT_PASSWORD=example  --volume ./database/init:/docker-entrypoint-initdb.d mariadb:latest
```
2. Run Maven in base project directory:
    
```
$ mvn clean install
```
3. Run npm in `./frontend`:

```
npm install
```
4. Run backend via Spring Boot

```
./mvnw spring-boot:run
```
5. Run frontend

```
npm start
```

## Deployment via Docker
The included docker-compose should run pre-built images hosted via docker hub of the application.

Update the docker-compose.yaml file with a password for the database, and update the location of the NGINX and DB volumes if running outside of this project.

Images are built via `docker buildx` command to target amd and arm platforms.

```
docker buildx build --platform linux/amd64,linux/arm64 -t markwryan/canvass:latest --push .\
cd frontend
docker buildx build --platform linux/amd64,linux/arm64 -t markwryan/canvass-frontend:latest --push .\
```