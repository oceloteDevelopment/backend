FROM node:18.12.1
# Create app directory
WORKDIR /dist

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ["package.json","package*.lock.json", "/"]

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# Start the server using the production build
CMD [ "npm", "start" ]


