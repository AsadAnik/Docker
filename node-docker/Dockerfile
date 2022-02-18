# Step 1..(Bring base image)
FROM node:alpine

# Step 2..(Create a working directory)
WORKDIR /usr/nodeapp

# Step 3..(Bring all files)
# COPY (Present All Files) (Copy Where into Container)
COPY ./ ./

# Step 4..(Run installer)
RUN npm install

# Step 5..(Default Command)
CMD [ "npm", "run", "dev" ]