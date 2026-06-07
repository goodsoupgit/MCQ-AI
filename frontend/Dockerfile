FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Next.js code
COPY . .

# Expose the standard Next.js port
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]