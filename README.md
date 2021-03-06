# node-mongo-dev
## Docker 
The container for developer environment.

The Stack include:

  - NodeJS = 13.0
  - MongoDb = lastest
  - MongoExpress = lastest
  
 The docker-compose.yml file description:
 
 ```
 version: "3.1"

services:
    app:
        container_name: node-dev 
        build: .
        command: run_tests.sh
        command: npm start
        ports: 
            - 3000:3000
        volumes: 
            - .:/usr/app

    mongo-express:
        container_name: mongo-express
        image: mongo-express
        ports:
            - 5050:8081
        depends_on: 
            - mongo
        environment:
            ME_CONFIG_BASICAUTH_USERNAME: root
            ME_CONFIG_BASICAUTH_PASSWORD: root
            ME_CONFIG_MONGODB_PORT: 27017
            ME_CONFIG_MONGODB_ADMINUSERNAME: root
            ME_CONFIG_MONGODB_ADMINPASSWORD: root
            
    mongo:
        container_name: mongo-dev
        image: mongo
        environment:
            MONGO_INITDB_ROOT_USERNAME: root
            MONGO_INITDB_ROOT_PASSWORD: root
        ports:
            - "27017:27017"
        volumes:
            - ./data/volume:/data/db

 
 ```
