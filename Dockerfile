# Stage 1: Build
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Set working directory in the container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy built files from the build stage
COPY --from=build /app/dist .

# Copy over the Nginx configuration file for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
