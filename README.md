# docker-compose-example
Example of two express servers sending requests to one another via docker-compose. The master sends a request to the slave every 500ms and the master logs the response to the console.

### Build and Run
```bash
$ docker-compose up --build
```
