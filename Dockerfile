# First stage: Build the Nest.js application
FROM node:18.0-alpine3.15 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Nest.js application
RUN npm run build

# Second stage: Create a lightweight container to run the built application
FROM node:18.0-alpine3.15

# Set the working directory
WORKDIR /app

# Copy only necessary files from the first stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:prod"]
