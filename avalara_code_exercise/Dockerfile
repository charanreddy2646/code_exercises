# Using the latest LTS version of Node

FROM node:stretch-slim

# Let's create our working dir

WORKDIR /usr/src/app

# Install packages needed for this exercise

RUN apt-get update -qq > /dev/null && apt-get install -qq -y --no-install-recommends curl netcat > /dev/null

# Copy the package.json file over
COPY package*.json ./

# Now we'll install the node server and modules that'll accept the POST requests
RUN npm install

# Bundle app source

COPY . .

# We'll listen on port 8080

EXPOSE 8080

# Run the app

CMD ["node", "myapp.js"]
