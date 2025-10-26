# Multi-stage build for optmized production image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of your application files
COPY . .

# Expose the port your app runs on 
EXPOSE 5173

# Define the command to run your app
CMD [ "pnpm", "dev" ]