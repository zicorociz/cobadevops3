<<<<<<< HEAD
# Gunakan image dasar
FROM node:20

# Set direktori kerja
=======
# Build stage
FROM node:20 AS builder
>>>>>>> 323ded25e9731322826d90f54112ceb521c73cb0
WORKDIR /app
# Copy all files to ensure public and src are available
COPY . .
RUN npm ci
RUN npm run build

# Production stage
FROM node:20
WORKDIR /app
# Install serve globally
RUN npm install -g serve
# Copy the dist folder from the builder stage
COPY --from=builder /app/build ./build
# Set the port environment variable
ENV PORT=8090
# Expose the port
EXPOSE $PORT
# Run serve to serve the dist folder
CMD ["sh", "-c", "serve -s dist -l $PORT"]
