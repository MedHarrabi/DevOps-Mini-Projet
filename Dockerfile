# Use Node.js as the base image
FROM node:16

# Create and set the app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app code
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]