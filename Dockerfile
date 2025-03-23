# Use the Node.js 18 Alpine image as the base image for the build stage
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the application (assumes a React or similar frontend app)
RUN npm run build

# Use Nginx as the final base image for serving the built app
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx serving directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow traffic into the container
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
