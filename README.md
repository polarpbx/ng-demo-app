## 🛠️ Local Development (Without Docker)
For local development, you can run the Angular app directly using npm install and ng serve.
1. Install Dependencies
Run the following command to install required packages:

```sh
npm install
```
2. Start the Application
Run the development server:

```sh
ng serve
```


## Angular Docker Deployment 🚀
This project contains a Dockerized Angular application that can be built and deployed using either Docker or Docker Compose.

## 🛠️ Build & Run with Docker
1. Build the Docker Image
Run the following command to build the image:

```sh
docker build -t ng-demo-app .
```

2. Run the Docker Container
Once the image is built, start the container:

```sh
docker run -p 8080:80 ng-demo-app
```

> This will expose your Angular app on `http://localhost:8080`.


## 📦 Build & Run with Docker Compose
You can also use Docker Compose to build and run the application.

1. Build the Image

```sh
docker-compose build
```

2. Start the Container

```sh
docker-compose up -d
```

> Note: The `-d` flag runs the container in detached mode (in the background).


## 🌎 Access the Application
After running either Docker or Docker Compose, open your browser and go to:
🔗 http://localhost:8080


## 🛑 Stop the Container
To stop the running container:

```sh
docker stop ng-demo-app
```

Or if using Docker Compose:

```sh
docker-compose down

```


> 📌 Notes
> The Dockerfile uses multi-stage builds to optimize the image size.
> The app is served using Nginx for better performance.
> Ensure port 8080 is available before running the container.