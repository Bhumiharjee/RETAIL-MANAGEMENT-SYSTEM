# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application if needed (e.g., for frontend)
# RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json from the build stage
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application code from the build stage
COPY --from=build /app .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
