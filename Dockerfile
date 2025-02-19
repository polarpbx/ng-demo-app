# Stage 1: Build the Angular Application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application (production build)
RUN npm run build -- --configuration=production

# Stage 2: Serve the Application with Nginx
FROM nginx:alpine

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/ng-demo-app/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
