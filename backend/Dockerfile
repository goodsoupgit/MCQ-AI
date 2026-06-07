# 1. Start with a lightweight Linux environment that has Node.js installed
# "alpine" just means a very small, stripped-down version of Linux.
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy only the package files first
# We do this first because Docker caches steps. If your dependencies don't change,
# Docker skips reinstalling them, making your builds much faster.
COPY package*.json ./

# 4. Install the dependencies
RUN npm install

# 5. Copy the rest of your backend code into the container
COPY . .

# 6. Expose the port your Express server will run on
EXPOSE 5000

# 7. The command to start your server (we use dev mode for hot-reloading)
CMD ["npm", "run", "dev"]