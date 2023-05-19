# Canvass

## Setup

### MariaDB Database

Run the MariaDB database locally via Docker

```bash
$ docker run -d --name canvass-mariadb --env MARIADB_USER=canvasser --env MARIADB_PASSWORD=canvassing-password --env MARIADB_ROOT_PASSWORD=canvass-root-password  --volume ./database/init:/docker-entrypoint-initdb.d mariadb:latest
```